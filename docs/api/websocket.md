---
title: WebSocket
---

# WebSocket

WebSocket 用于处理画布实时更新、多人协作和状态广播。

## 适合 WebSocket 的场景

- 节点实时移动和更新
- 选区变更广播
- 多端状态同步
- 分析任务进度推送

## 消息类型示例

- `graph.updated`
- `node.created`
- `node.updated`
- `analysis.progress`
- `session.synced`

## 建议

把高频、低延迟的画布协作放在 WebSocket，把一次性请求放在 REST，两者职责应明确分离。
