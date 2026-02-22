# 🟢 1️⃣ Start Mongo Shell

If local:

```bash
mongosh
```

If Atlas, connect using your connection string.

---

# 🟢 2️⃣ Show Databases

```js
show dbs;
```

---

# 🟢 3️⃣ Create / Switch Database

```js
use testdemo;
```

MongoDB creates database automatically when you insert data.

Verify:

```js
db;
```

---

# 🟢 4️⃣ Show Collections

```js
show collections;
```

---

# 🟢 5️⃣ Create Collection

```js
db.createCollection("users");
```

Check:

```js
show collections;
```

---

# 🟢 6️⃣ Insert Data

## Insert One

```js
db.users.insertOne({
  name: "vishwas",
  email: "vishwas@cloudthat.com"
});
```

---

## Insert Many

```js
db.users.insertMany([
  { name: "kajal", email: "kajal@cloudthat.com" },
  { name: "arjun", email: "arjun@cloudthat.com" },
  { name: "kiran", email: "kiran@cloudthat.com" }
]);
```

---

# 🟢 7️⃣ Find Data

## View All

```js
db.users.find();
```

Better format:

```js
db.users.find().pretty();
```

---

## Find One

```js
db.users.findOne({ name: "kajal" });
```

---

## Find with Condition

```js
db.users.find({ name: "arjun" });
```

---

# 🟢 8️⃣ Projection (Select Fields)

Only name:

```js
db.users.find({}, { name: 1, _id: 0 });
```

---

# 🟢 9️⃣ Sorting

Ascending:

```js
db.users.find().sort({ name: 1 });
```

Descending:

```js
db.users.find().sort({ name: -1 });
```

---

# 🟢 🔟 Limit Results

```js
db.users.find().limit(2);
```

---

# 🟢 1️⃣1️⃣ Count Documents

```js
db.users.countDocuments();
```

With condition:

```js
db.users.countDocuments({ name: "kajal" });
```

---

# 🟢 1️⃣2️⃣ Update Operations

## Update One

```js
db.users.updateOne(
  { name: "vishwas" },
  { $set: { role: "admin" } }
);
```

---

## Update Many

```js
db.users.updateMany(
  {},
  { $set: { status: "active" } }
);
```

Check:

```js
db.users.find().pretty();
```

---

# 🟢 1️⃣3️⃣ Delete Operations

## Delete One

```js
db.users.deleteOne({ name: "kiran" });
```

---

## Delete Many

```js
db.users.deleteMany({ status: "active" });
```

---

# 🟢 1️⃣4️⃣ Advanced Queries

## Not Equal

```js
db.users.find({ name: { $ne: "kajal" } });
```

---

## OR Condition

```js
db.users.find({
  $or: [
    { name: "kajal" },
    { name: "arjun" }
  ]
});
```

---

## Regex Search

```js
db.users.find({ email: /cloudthat/ });
```

---

# 🟢 1️⃣5️⃣ Aggregation Example

Group and count:

```js
db.users.aggregate([
  {
    $group: {
      _id: "$role",
      total: { $sum: 1 }
    }
  }
]);
```

---

# 🟢 1️⃣6️⃣ Drop Collection

```js
db.users.drop();
```

---

# 🟢 1️⃣7️⃣ Drop Database

```js
use testdemo;
db.dropDatabase();
```

---

# 🎯 Full Practice Script (Copy-Paste Ready)

```js
use testdemo;

db.createCollection("users");

db.users.insertMany([
  { name: "vishwas", email: "vishwas@cloudthat.com" },
  { name: "kajal", email: "kajal@cloudthat.com" },
  { name: "arjun", email: "arjun@cloudthat.com" },
  { name: "kiran", email: "kiran@cloudthat.com" }
]);

db.users.find().pretty();

db.users.updateOne(
  { name: "vishwas" },
  { $set: { role: "admin" } }
);

db.users.deleteOne({ name: "kiran" });

db.users.countDocuments();
```