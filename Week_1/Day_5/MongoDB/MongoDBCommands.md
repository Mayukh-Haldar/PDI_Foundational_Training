# Start Mongo Shell

If local:

```bash
mongosh
```

If Atlas, connect using your connection string.

---

# Show Databases

```js
show dbs;
```

---

# Create / Switch Database

```js
use testdemo;
```

MongoDB creates database automatically when you insert data.

Verify:

```js
db;
```

---

# Show Collections

```js
show collections;
```

---

# Create Collection

```js
db.createCollection("users");
```

Check:

```js
show collections;
```

---

# Insert Data

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

# Find Data

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

# Projection (Select Fields)

Only name:

```js
db.users.find({}, { name: 1, _id: 0 });
```

---

# Sorting

Ascending:

```js
db.users.find().sort({ name: 1 });
```

Descending:

```js
db.users.find().sort({ name: -1 });
```

---

# Limit Results

```js
db.users.find().limit(2);
```

---

# Count Documents

```js
db.users.countDocuments();
```

With condition:

```js
db.users.countDocuments({ name: "kajal" });
```

---

# Update Operations

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

# Delete Operations

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

# Advanced Queries

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

# Aggregation Example

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

# Drop Collection

```js
db.users.drop();
```

---

# Drop Database

```js
use testdemo;
db.dropDatabase();
```

---

# Full Practice Script

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