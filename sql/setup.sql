-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS past_pets;

CREATE TABLE past_pets (
  id BIGINT GENERATED ALWAYS AS IDENTITY,
  name VARCHAR,
  animal VARCHAR,
  nickname VARCHAR,
  age INT,
  smells BOOLEAN
);

INSERT INTO past_pets (name, animal, nickname, age, smells)
VALUES 
('KimChi', 'Mastiff', 'Kim', 9, TRUE),
('Jacobim', 'Hairless Cat', 'Tuna', 1, FALSE),
('Alf', 'Cocateau', 'Mike', 5, FALSE),
('Poppy', 'border collie', 'Meatball', 4, TRUE),
('McFarland', 'Pug', 'KFC', 22, TRUE);
