CREATE TABLE "character" (
    id INTEGER PRIMARY KEY,
    title TEXT,
    description TEXT,
    img TEXT
); 



INSERT INTO "character" (
    id, title, description, img
) VALUES (
    1, 'Luffy', 'King of Pirates', 'https://i.pinimg.com/originals/23/e4/e7/23e4e7aa8e7a9e2dbc75fece9d77fc99.jpg'
    );



INSERT INTO "character" (
    id, title, description, img
) VALUES (
    2, 'Zoro', 'First Mate', 'https://us-tuna-sounds-images.voicemod.net/63b88f94-323d-4b6f-bc89-5d3eb259c25f-1659734293094.jpg'
    );



INSERT INTO "character" (
    id, title, description, img
) VALUES (
    3, 'Sanji', 'Crew Cook', 'https://i.pinimg.com/originals/75/13/bc/7513bc09a23d5a787eb18d93cf308294.jpg'
    );



INSERT INTO "character" (
    id, title, description, img
) VALUES (
    4, 'Chopper', 'Crew Doctor', 'https://pbs.twimg.com/media/Ej00TH2WoAAIy37.jpg'
    );



INSERT INTO "character" (
    id, title, description, img
) VALUES (
    5, 'Robin', 'Crew Historian', 'https://i.ytimg.com/vi/AvHURUhjq6s/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGGUgUShhMA8=&rs=AOn4CLAWerfhCn2hMOFLmOfe2-0NllIyBg'
    );



SELECT * FROM "character";