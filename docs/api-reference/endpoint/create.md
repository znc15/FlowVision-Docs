---
title: 创建图
---

# POST /graphs

创建一张新的流程图，或基于初始上下文生成一张待编辑图。

## 请求体示例

```json
{
  "name": "订单履约链路",
  "prompt": "生成订单履约流程图，突出仓储、物流和通知环节",
  "workspaceId": "ws_001"
}
```

## 响应示例

```json
{
  "id": "graph_002",
  "status": "created"
}
```
