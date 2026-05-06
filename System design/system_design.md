# 🧱 System Design Foundations (Beginner Guide)

## 1. 🌐 How the Web Works (MUST KNOW)

You should clearly understand:

- What happens when you type a URL
- Flow: Request → Server → Response
- Basics of REST APIs

### You should know:

- HTTP Methods:
  - GET
  - POST
  - PUT
  - DELETE
- Status Codes:
  - 200 → Success
  - 404 → Not Found
  - 500 → Server Error
- Client vs Server

> If this is weak, system design will feel confusing.

---

## 2. 🗄️ Databases (VERY IMPORTANT)

You don’t need to be an expert, but must know:

### SQL (Relational DB)

- Tables
- Rows
- Joins
- Primary Key
- Indexing

### NoSQL (Basics)

- Key-Value (Redis)
- Document (MongoDB)

**Key Idea:**  
When to use SQL vs NoSQL

---

## 3. ⚡ Caching (SUPER IMPORTANT)

This is everywhere in system design.

### Understand:

- What is cache?
- Why it’s faster than DB

### Examples:

- Browser cache
- Redis

**Key Idea:**  
Cache = speed boost vs freshness trade-off

---

## 4. 🌐 Client–Server Architecture

Basic flow:

Frontend → Backend → Database

### Responsibilities:

- Frontend → UI
- Backend → Logic
- Database → Storage

### Important:

- APIs connect frontend to backend

---

## 5. ⚖️ Scalability Basics (VERY IMPORTANT)

This is the heart of system design.

### Types:

- Vertical scaling → Bigger machine
- Horizontal scaling → More machines

**Key Idea:**  
More users → more servers

---

## 6. 🔁 Load Balancer (Basic Idea)

Distributes traffic across servers.

Flow:

User → Load Balancer → Server1 / Server2 / Server3

---

## 7. 💾 Basic Storage Thinking

You should understand:

- Where is data stored
- How it is retrieved
- What happens when data grows

---

## 8. 🧩 Problem-Solving Mindset

System design is NOT memorization.

Always think:

- What are requirements?
- What can go wrong?
- Where is the bottleneck?
