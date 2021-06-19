-- DELETE DATABASE petshop;
CREATE DATABASE petshop;
USE petshop;

DROP TABLE inventory;
CREATE TABLE inventory(
    inventory_id    int AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name            VARCHAR(30),           
    breed           VARCHAR(30),
    image           VARCHAR(80),
    gender          VARCHAR(10)
);

INSERT INTO inventory(name, breed, image, gender)
VALUES  ("ralph",  "beagle", "beagle/n02088364_10296",  "male"),
        ("buster", "beagle", "beagle/n02088364_10206",  "male"),
        ("lola",   "beagle", "beagle/n02088364_10354",  "female"),
        ("tucker", "beagle", "beagle/n02088364_10108",  "male"),
        ("murphy", "beagle", "beagle/n02088364_10206",  "male"),
        ("angel",  "bulldog", "bulldog-boston/n02096585_1179",  "female"),
        ("coco",   "bulldog", "bulldog-boston/n02096585_11808", "female"),
        ("bailey", "bulldog", "bulldog-boston/n02096585_11817", "female"),
        ("duke",   "bulldog", "bulldog-boston/n02096585_1207",  "male"),
        ("jake",   "bulldog", "bulldog-boston/n02096585_12168", "male");
