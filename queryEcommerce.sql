CREATE TABLE category(id SERIAL PRIMARY KEY, name TEXT);

CREATE TABLE checkout(id SERIAL PRIMARY KEY, id_transaction INTEGER, status TEXT, id_seller TEXT, id_user TEXT, id_product INTEGER);

CREATE TABLE mybag(id SERIAL PRIMARY KEY, id_user TEXT, id_product INTEGER, qty INTEGER, total INTEGER);

CREATE TABLE product(id SERIAL PRIMARY KEY, name TEXT, id_seller TEXT, description TEXT, condition TEXT, photo TEXT, brand TEXT, category TEXT, stock INTEGER, price INTEGER, size INTEGER);

CREATE TABLE transaction(id SERIAL PRIMARY KEY, id_customer TEXT, id_seller TEXT, id_product INTEGER, qty INTEGER, total_price INTEGER);

CREATE TABLE users(id TEXT PRIMARY KEY, name TEXT, email TEXT, password TEXT, phone_number TEXT, role TEXT, birth TEXT DEFAULT '', photo TEXT DEFAULT '', store_description TEXT DEFAULT '', store_name TEXT DEFAULT '', address TEXT DEFAULT '', zip TEXT DEFAULT '', city TEXT DEFAULT '', recipient_name TEXT DEFAULT '', recipient_phone TEXT DEFAULT '');

SELECT mybag.id, mybag.id_product, mybag.qty, product.name, product.photo, product.price, users.name AS username, users.email FROM mybag INNER JOIN product ON mybag.id_product = product.id INNER JOIN users ON mybag.id_user = users.id WHERE mybag.id_user = '4375da32-9ccd-466a-ba27-b904b4be105b';

SELECT mybag.* FROM mybag INNER JOIN users ON mybag.id_user = '4375da32-9ccd-466a-ba27-b904b4be105b';

CREATE TABLE bag(id SERIAL PRIMARY KEY, user_id TEXT, user_name TEXT, product_id INTEGER, product_name TEXT, price INTEGER, photo TEXT, brand TEXT);

CREATE TABLE checkout(id_transaction SERIAL PRIMARY KEY, user_id TEXT, seller_id TEXT, username TEXT, seller_name TEXT, status TEXT DEFAULT 'PAYMENT CONFIRMATION', subtotal INTEGER);

SELECT bag.* seller_id AS 