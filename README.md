#  智慧醫院管理平台
## SmartCare hospital

> 一個以醫院線上預約掛號為核心的智慧醫院管理平台，
> 從需求分析、UI/UX 設計、Prototype 開始，逐步進行前後端與資料庫開發。


## 專案介紹

「智慧醫院管理平台」是一個以醫療資訊系統為主題的個人實作專案。

本專案希望模擬實際醫院網站與醫療管理系統的使用流程，
第一階段以一般使用者的醫院預約掛號為核心，
完成使用者端的主要網站與預約相關功能，
後續再擴充醫師端與管理者端功能。

### Figma UI/UX Design

已完成第一階段使用者端的Wireframe、UI Design與Prototype。

  [使用者端|Wireframe展示](https://www.figma.com/design/amHPOOuZXVL8IvtbaLER2N/%E6%99%BA%E6%85%A7%E9%86%AB%E9%99%A2%E7%B3%BB%E7%B5%B1?node-id=0-1&t=QJTu0iVPh5BPmQXH-1)

  [使用者端|UI Design展示](https://www.figma.com/design/amHPOOuZXVL8IvtbaLER2N/%E6%99%BA%E6%85%A7%E9%86%AB%E9%99%A2%E7%B3%BB%E7%B5%B1?node-id=109-114&t=QJTu0iVPh5BPmQXH-1)

  [使用者端|Prototype展示](https://www.figma.com/proto/amHPOOuZXVL8IvtbaLER2N/%E6%99%BA%E6%85%A7%E9%86%AB%E9%99%A2%E7%B3%BB%E7%B5%B1?node-id=131-68&t=IjeycfyVteN5iLez-1&scaling=min-zoom&content-scaling=fixed&page-id=109%3A114&starting-point-node-id=131%3A68)
### 專案開發流程 :

 ```mermaid
flowchart TD
    A[需求分析] --> B[Wireframe]
    B --> C[UI Design]
    C --> D[Prototype]
    D --> E[Frontend]
    E --> F[Backend]
    F --> G[Database]
    
```


透過完整的開發流程，學習企業軟體開發中，從需求規劃、介面設計到系統實作的過程。

## 專案目標

- 建立完整的醫院線上預約掛號流程
- 練習UI/UX設計與Prototype製作
- 學習前端網站開發
- 學習Angular與TypeScript
- 學習C#與ASP.NET Core Web API
- 學習Oracle資料庫設計與操作
- 建立前後端分離的系統架構概念
- 使用Git/GitHub紀錄完整開發過程
- 透過實際專案理解企業軟體開發流程

## 技術規劃

| 類別 | 技術 | 用途 |
|------|------|------|
| UI/UX 設計 | Figma | Wireframe、UI Design、Prototype |
| 前端 | HTML / CSS | 網頁結構與樣式 |
| 前端 | JavaScript | 網頁互動功能 |
| 前端框架 | Angular | 元件化前端開發 |
| 程式語言 | TypeScript | Angular 前端開發 |
| 後端 | C# | 後端程式邏輯 |
| 後端框架 | ASP.NET Core | Web API 與後端服務 |
| 資料庫 | Oracle | 系統資料儲存與管理 |
| 版本控制 | Git | 程式碼版本管理 |
| 專案管理 | GitHub | 程式碼與開發紀錄管理 |

## 系統使用者

### 一般使用者/病患

主要功能：

- 查看醫院資訊
- 查詢醫師
- 查看醫師詳細資訊
- 線上預約掛號
- 查看我的預約
- 查看預約詳細資訊
- 取消預約
- 修改會員資料
- 查看就醫資訊

### 醫師/醫護人員

後續階段規劃：

- 查看病患資料
- 查看預約資訊
- 登記看診結果
- 登記處方資訊

### 系統管理者

後續階段規劃：

- 會員管理
- 醫師管理
- 病患管理
- 預約管理
- 門診時段管理
- 系統通知
- 系統設定

## 開發階段

### Phase 1 — 使用者端

以一般病患使用的醫院預約網站為核心。

#### 已完成

- [x] 首頁
- [x] 醫院介紹
- [x] 醫師查詢
- [x] 醫師詳細資訊
- [x] 登入 / 註冊
- [x] 預約掛號
- [x] 預約成功
- [x] 我的預約
- [x] 預約詳細資訊
- [x] 取消預約
- [x] 個人資料
- [x] 就醫資訊
- [x] UI Design
- [x] Prototype

#### 後續開發

- [ ] Angular
- [ ] TypeScript
- [ ] 前端頁面實作
- [ ] API開發
- [ ] Oracle資料庫設計
- [ ] 前後端API串接
- [ ] 資料庫串接
- [ ] 登入與會員資料功能
- [ ] 醫師資料與預約資料串接


### Phase 2 — 醫師端

提供醫師進行病患與看診相關操作。

#### 規劃功能

- [ ] 醫師登入
- [ ] 今日門診
- [ ] 預約病患列表
- [ ] 病患基本資料
- [ ] 看診結果登記
- [ ] 處方資訊
- [ ] 歷史看診紀錄
- [ ] 門診時段

#### 資料與系統開發

- [ ] 醫師與病患資料串接
- [ ] 看診紀錄資料庫設計
- [ ] 處方資料庫設計
- [ ] 醫師端API開發
- [ ] 前後端整合


### Phase 3 — 管理者端

提供醫院管理人員進行系統管理。

#### 規劃功能

- [ ] 管理者登入
- [ ] 會員管理
- [ ] 醫師管理
- [ ] 病患管理
- [ ] 預約管理
- [ ] 科別管理
- [ ] 門診時段管理
- [ ] 系統通知
- [ ] 系統設定

#### 資料與系統開發

- [ ] 管理者權限與角色管理
- [ ] 管理功能API開發
- [ ] 資料庫功能擴充
- [ ] 前後端整合
