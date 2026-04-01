---
title: Webhook 事件
---

# Webhook

当图状态、分析任务或导出任务发生变化时，FlowVision 可以向外部系统推送事件。

## 常见事件

- `graph.created`
- `graph.updated`
- `analysis.completed`
- `export.finished`

## Payload 示例

```json
{
  "event": "analysis.completed",
  "workspaceId": "ws_001",
  "graphId": "graph_002",
  "timestamp": "2026-04-02T08:10:00.000Z"
}
```
