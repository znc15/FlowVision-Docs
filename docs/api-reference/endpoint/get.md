---
title: 获取图列表
---

# GET /graphs

获取当前工作区下的流程图列表。

## 查询参数

| 参数 | 说明 |
| --- | --- |
| `workspaceId` | 工作区标识 |
| `page` | 页码 |
| `pageSize` | 每页数量 |

## 响应示例

```json
{
  "items": [
    {
      "id": "graph_001",
      "name": "支付链路图",
      "updatedAt": "2026-04-02T08:00:00.000Z"
    }
  ],
  "total": 1
}
```
