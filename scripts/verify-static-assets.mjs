import fs from 'node:fs';
import path from 'node:path';

const buildDir = path.resolve('build');
const siteUrl = 'https://znc15.github.io';
const baseUrl = '/FlowVision-Docs/';
const assetPattern = /(?:src|href|content)="([^"]+\.(?:png|svg|ico|jpg|jpeg|webp|gif))"/gi;

function walkHtmlFiles(dirPath) {
  const entries = fs.readdirSync(dirPath, {withFileTypes: true});
  const files = [];

  for (const entry of entries) {
    const entryPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      files.push(...walkHtmlFiles(entryPath));
      continue;
    }

    if (entry.isFile() && entry.name.endsWith('.html')) {
      files.push(entryPath);
    }
  }

  return files;
}

function normalizeAssetPath(rawValue) {
  if (rawValue.startsWith(siteUrl)) {
    return new URL(rawValue).pathname;
  }

  if (rawValue.startsWith('/')) {
    return rawValue;
  }

  return null;
}

function toBuildFilePath(assetPath) {
  if (assetPath.startsWith(baseUrl)) {
    return {
      expectedBaseUrl: true,
      filePath: path.join(buildDir, assetPath.slice(baseUrl.length)),
    };
  }

  return {
    expectedBaseUrl: false,
    filePath: path.join(buildDir, assetPath.replace(/^\//, '')),
  };
}

if (!fs.existsSync(buildDir)) {
  console.error('build 目录不存在，请先运行 pnpm build');
  process.exit(1);
}

const htmlFiles = walkHtmlFiles(buildDir);
const failures = [];

for (const htmlFile of htmlFiles) {
  const content = fs.readFileSync(htmlFile, 'utf8');

  for (const match of content.matchAll(assetPattern)) {
    const rawValue = match[1];
    const assetPath = normalizeAssetPath(rawValue);

    if (!assetPath) {
      continue;
    }

    const {expectedBaseUrl, filePath} = toBuildFilePath(assetPath);

    if (!expectedBaseUrl) {
      failures.push(`${path.relative(buildDir, htmlFile)} 引用了未带 baseUrl 的资源路径: ${rawValue}`);
      continue;
    }

    if (!fs.existsSync(filePath)) {
      failures.push(`${path.relative(buildDir, htmlFile)} 引用了不存在的资源文件: ${rawValue}`);
    }
  }
}

if (failures.length > 0) {
  console.error('静态资源路径校验失败:');
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log('静态资源路径校验通过');