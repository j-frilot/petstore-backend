-- DELETE DATABASE petshop;
--CREATE DATABASE petshop;
--USE petshop;

DROP TABLE inventory;
CREATE TABLE inventory(
    inventory_id    SMALLSERIAL NOT NULL,
    name            VARCHAR(30),           
    breed           VARCHAR(30),
    image           VARCHAR(80),
    gender          VARCHAR(10)
);

-- ADD AGE

INSERT INTO inventory(name, breed, image, gender)
VALUES  ('ralph',       'beagle',  'beagle/n02088364_10296',         'male'),
        ('buster',      'beagle',  'beagle/n02088364_10206',         'male'),
        ('lola',        'beagle',  'beagle/n02088364_10354',         'female'),
        ('tucker',      'beagle',  'beagle/n02088364_10108',         'male'),
        ('murphy',      'beagle',  'beagle/n02088364_10206',         'male'),
        ('angel',       'bulldog', 'bulldog-boston/n02096585_1179',  'female'),
        ('coco',        'bulldog', 'bulldog-boston/n02096585_11808', 'female'),
        ('bailey',      'bulldog', 'bulldog-boston/n02096585_11817', 'female'),
        ('duke',        'bulldog', 'bulldog-boston/n02096585_1207',  'male'),
        ('jake',        'bulldog', 'bulldog-boston/n02096585_12168', 'male'),
        ('Christopher', 'shihtzu', 'shihtzu/n02086240_1011',         'male'),
        ('tawana',      'shihtzu', 'shihtzu/n02086240_1016',         'female'),
        ('cristi',      'shihtzu', 'shihtzu/n02086240_1059',         'female'),
        ('reva',        'shihtzu', 'shihtzu/n02086240_1078',         'female'),
        ('ed',          'shihtzu', 'shihtzu/n02086240_10785',        'male'),
        ('jay',         'husky',   'husky/n02110185_10047',          'male'),
        ('ant',         'husky',   'husky/n02110185_10116',          'male'),
        ('vernie',      'husky',   'husky/n02110185_10171',          'male'),
        ('mitzie',      'husky',   'husky/n02110185_10175',          'female'),
        ('marley',      'husky',   'husky/n02110185_10273',          'male');