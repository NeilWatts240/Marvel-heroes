'use strict'

document.addEventListener('DOMContentLoaded', () => {

    const data = [
        {
            "name": "Ancient One",
            "species": "human",
            "gender": "Female",
            "birthDay": "1316",
            "deathDay": "2017",
            "status": "deceased",
            "actors": "Tilda Swinton",
            "photo": "dbimage/DS_Ancient_One_Poster_cropped.png",
            "movies": [
                "Doctor Strange",
                "Avengers: Endgame"
            ]
        },
        {
            "name": "Ant-Man",
            "realName": "Scott Edward Harris Lang",
            "species": "human",
            "citizenship": "American",
            "gender": "male",
            "status": "alive",
            "actors": "Paul Rudd",
            "photo": "dbimage/AntMan-EndgameProfile.jpg",
            "movies": [
                "Ant-Man",
                "Captain America: Civil War",
                "Ant-Man and the Wasp",
                "Avengers: Endgame"
            ]
        },
        {
            "name": "Black Panther",
            "realName": "T'Challa",
            "species": "human",
            "citizenship": "Wakandan",
            "gender": "male",
            "status": "alive",
            "actors": "Chadwick Boseman",
            "photo": "dbimage/Black_Panther_AIW_Profile.jpg",
            "movies": [
                "Captain America: Civil War",
                "Black Panther",
                "Avengers: Infinity War",
                "Avengers: Endgame"
            ]
        },
        {
            "name": "Black Widow",
            "realName": "Natalia Alianovna Romanoff",
            "species": "human",
            "citizenship": "Soviet",
            "gender": "female",
            "birthDay": "1984",
            "deathDay": "2014",
            "status": "alive",
            "actors": "Scarlett Johansson",
            "photo": "dbimage/BlackWidow-EndgameProfile.jpg",
            "movies": [
                "Iron Man 2",
                "The Avengers",
                "Captain America: The Winter Soldier",
                "Avengers: Age of Ultron",
                "Captain America: Civil War",
                "Avengers: Infinity War",
                "Avengers: Endgame"
            ]
        },
        {
            "name": "Captain America",
            "realName": "Steven Grant Rogers",
            "species": "human",
            "citizenship": "British",
            "gender": "male",
            "birthDay": "1918",
            "status": "alive",
            "actors": "Chris Evans",
            "photo": "dbimage/CapAmerica-EndgameProfile.jpg",
            "movies": [
                "Captain America: The First Avenger",
                "The Avengers",
                "Captain America: The Winter Soldier",
                "Avengers: Age of Ultron",
                "Captain America: Civil War",
                "Avengers: Infinity War",
                "Avengers: Endgame"
            ]
        },
        {
            "name": "Captain Marvel",
            "realName": "Carol Danvers",
            "species": "human",
            "citizenship": "American",
            "gender": "female",
            "status": "alive",
            "actors": "Brie Larson",
            "photo": "dbimage/CapMarvel-EndgameProfile.jpg",
            "movies": [
                "Captain Marvel",
                "Avengers: Endgame"
            ]
        },
        {
            "name": "Daredevil",
            "realName": "Matthew Michael Murdock",
            "species": "human",
            "citizenship": "American",
            "gender": "male",
            "status": "alive",
            "actors": "Charlie Cox",
            "photo": "dbimage/Daredevil_S3_Textless_Poster03.jpg"
        },
        {
            "name": "Doctor Strange",
            "realName": "Stephen Vincent Strange",
            "species": "human",
            "citizenship": "American",
            "gender": "male",
            "status": "alive",
            "actors": "Benedict Cumberbatch",
            "photo": "dbimage/Doctor_Strange_AIW_Profile.jpg",
            "movies": [
                "Doctor Strange",
                "Thor: Ragnarok",
                "Avengers: Infinity War",
                "Avengers: Endgame"
            ]
        },
        {
            "name": "Drax the Destroyer",
            "realName": "Drax",
            "species": "human",
            "gender": "male",
            "status": "alive",
            "actors": "Dave Bautista",
            "photo": "dbimage/Drax_AIW_Profile.jpg"
        },
        {
            "name": "Dum Dum Dugan",
            "realName": "Timothy Aloysius Cadwallader Dugan",
            "species": "human",
            "citizenship": "American",
            "gender": "male",
            "birthDay": "1912",
            "status": "unknown",
            "actors": "Neal McDonough",
            "photo": "dbimage/DumDumDuganProfile.png",
            "movies": [
                "Captain America: The First Avenger",
                "The Avengers"
            ]
        },
        {
            "name": "Edwin Jarvis",
            "realName": "Edwin Jarvis",
            "species": "human",
            "citizenship": "British",
            "gender": "male",
            "status": "deceased",
            "actors": "James D'Arcy",
            "photo": "dbimage/Agent_Carter_Season_2_Promo_02.jpg",
            "movies": [
                "Avengers: Endgame"
            ]
        },
        {
            "name": "Ego",
            "realName": "Ego",
            "species": "Celestial",
            "gender": "male",
            "deathDay": "2014",
            "status": "deceased",
            "actors": "Kurt Russell",
            "photo": "dbimage/Ego_Profile%281%29.png",
            "movies": [
                "Guardians of the Galaxy Vol. 2"
            ]
        },
        {
            "name": "Executioner",
            "realName": "Skurge",
            "species": "human",
            "citizenship": "American",
            "gender": "male",
            "deathDay": "2017",
            "status": "deceased",
            "actors": "Karl Urban",
            "photo": "dbimage/Skurgetheexecutionerprofile.png",
            "movies": [
                "Thor: Ragnarok"
            ]
        },
        {
            "name": "Falcon",
            "realName": "Samuel Thomas Wilson",
            "species": "human",
            "citizenship": "American",
            "gender": "male",
            "status": "alive",
            "actors": "Anthony Mackie",
            "photo": "dbimage/Falcon_AIW_Profile.jpg",
            "movies": [
                "Captain America: The Winter Soldier",
                "Avengers: Age of Ultron",
                "Ant-Man",
                "Captain America: Civil War",
                "Avengers: Infinity War",
                "Avengers: Endgame"
            ]
        },
        {
            "name": "Gamora",
            "realName": "Gamora",
            "species": "Zehoberei",
            "gender": "female",
            "status": "alive",
            "actors": "Zoe Saldana",
            "photo": "dbimage/Gamora_AIW_Profile.jpg",
            "movies": [
                "Guardians of the Galaxy",
                "Guardians of the Galaxy Vol. 2",
                "Avengers: Infinity War",
                "Avengers: Endgame"
            ]
        },
        {
            "name": "Groot",
            "realName": "Groot",
            "species": "flora colossus",
            "gender": "male",
            "birthDay": "2014",
            "status": "alive",
            "actors": "Vin Diesel",
            "photo": "dbimage/Groot_AIW_Profile.jpg",
            "movies": [
                "Guardians of the Galaxy",
                "Guardians of the Galaxy Vol. 2",
                "Avengers: Infinity War",
                "Avengers: Endgame"
            ]
        },
        {
            "name": "Hank Pym",
            "realName": "Henry Jonathan Pym",
            "species": "human",
            "citizenship": "American",
            "gender": "male",
            "status": "alive",
            "actors": "Michael Douglas",
            "photo": "dbimage/Textless_AMATW_Character_Posters_03.jpg",
            "movies": [
                "Ant-Man",
                "Ant-Man and the Wasp",
                "Avengers: Endgame"
            ]
        },
        {
            "name": "Hawkeye",
            "realName": "Clinton Francis Barton",
            "species": "human",
            "citizenship": "American",
            "gender": "male",
            "status": "alive",
            "actors": "Jeremy Renner",
            "photo": "dbimage/HawkeyeRonin-EndgameProfile.jpg",
            "movies": [
                "Thor",
                "The Avengers",
                "Avengers: Age of Ultron",
                "Captain America: Civil War",
                "Avengers: Endgame"
            ]
        },
        {
            "name": "Heimdall",
            "realName": "Heimdall",
            "species": "human",
            "citizenship": "Asgardian",
            "gender": "male",
            "deathDay": "2018",
            "status": "alive",
            "actors": "Idris Elba",
            "photo": "dbimage/Thor_Ragnarok_Textless_Character_Posters_07.jpg",
            "movies": [
                "Thor",
                "Thor: The Dark World",
                "Thor: Ragnarok",
                "Avengers: Infinity War"
            ]
        },
        {
            "name": "Hela",
            "realName": "Hela Odinsdottir",
            "species": "Asgardian",
            "citizenship": "Asgardian",
            "gender": "female",
            "deathDay": "2017",
            "status": "deceased",
            "actors": "Cate Blanchett",
            "photo": "dbimage/Thor_Ragnarok_Textless_Character_Posters_01.jpg",
            "movies": [
                "Thor: Ragnarok"
            ]
        },
        {
            "name": "Helmut Zemo",
            "realName": "Helmut Zemo",
            "species": "human",
            "citizenship": "Sokovian",
            "gender": "male",
            "status": "alive",
            "actors": "Daniel Brühl",
            "photo": "dbimage/HelmutZemo-Masked.jpg",
            "movies": [
                "Captain America: Civil War"
            ]
        },
        {
            "name": "Hulk",
            "realName": "Robert Bruce Banner",
            "species": "human",
            "citizenship": "American",
            "gender": "male",
            "birthDay": "1969",
            "status": "alive",
            "actors": "Edward Norton",
            "photo": "dbimage/ProfHulkAvengersEndgamelicensingart001.jpg",
            "movies": [
                "The Incredible Hulk",
                "The Avengers",
                "Avengers: Age of Ultron",
                "Thor: Ragnarok",
                "Avengers: Infinity War",
                "Avengers: Endgame"
            ]
        },
        {
            "name": "Iron Man",
            "realName": "Tony Stark",
            "species": "human",
            "citizenship": "American",
            "gender": "male",
            "birthDay": "05-29-1970",
            "deathDay": "2023",
            "status": "deceased",
            "actors": "Robert Downey, Jr.",
            "photo": "dbimage/IronMan-EndgameProfile.jpg",
            "movies": [
                "Iron Man",
                "Iron Man 2",
                "The Avengers",
                "Iron Man 3",
                "Captain America: Civil War",
                "Spider-Man: Homecoming",
                "Avengers: Infinity War",
                "Avengers: Endgame"
            ]
        },
        {
            "name": "Jane Foster",
            "realName": "Jane Foster",
            "species": "human",
            "citizenship": "American",
            "gender": "female",
            "status": "alive",
            "actors": "Natalie Portman",
            "photo": "dbimage/Jane_Foster_Asgardian.jpg",
            "movies": [
                "Thor",
                "Thor: The Dark World",
                "Avengers: Endgame"
            ]
        },
        {
            "name": "Korg",
            "realName": "Korg",
            "species": "kronan",
            "citizenship": "Asgardian",
            "gender": "male",
            "status": "alive",
            "actors": "Taika Waititi",
            "photo": "dbimage/Korgas152.jpg",
            "movies": [
                "Thor: Ragnarok",
                "Avengers: Endgame"
            ]
        },
        {
            "name": "Loki",
            "realName": "Loki Laufeyson",
            "species": "Frost Giant",
            "citizenship": "Jotun",
            "gender": "male",
            "birthDay": "965",
            "deathDay": "2018",
            "status": "deceased",
            "actors": "Tom Hiddleston",
            "photo": "dbimage/Thor_Ragnarok_Textless_Character_Posters_03.jpg",
            "movies": [
                "Thor",
                "The Avengers",
                "Thor: The Dark World",
                "Thor: Ragnarok",
                "Avengers: Infinity War",
                "Avengers: Endgame"
            ]
        },
        {
            "name": "M'Baku",
            "realName": "M'Baku",
            "species": "human",
            "citizenship": "Wakandan",
            "gender": "male",
            "status": "alive",
            "actors": "Winston Duke",
            "photo": "dbimage/Black_Panther_Textless_Character_Poster_11.jpg",
            "movies": [
                "Black Panther",
                "Avengers: Infinity War",
                "Avengers: Endgame"
            ]
        },
        {
            "name": "Mantis",
            "realName": "Mantis",
            "species": "human",
            "gender": "female",
            "status": "alive",
            "actors": "Pom Klementieff",
            "photo": "dbimage/Mantis_AIW_Profile.jpg",
            "movies": [
                "Guardians of the Galaxy Vol. 2",
                "Avengers: Infinity War",
                "Avengers: Endgame"
            ]
        },
        {
            "name": "Mysterio",
            "realName": "Quentin Beck",
            "species": "human",
            "citizenship": "American",
            "gender": "male",
            "deathDay": "2024",
            "status": "deceased",
            "actors": "Jake Gyllenhaal",
            "photo": "dbimage/Mysterio-ChinesePromotional.png",
            "movies": [
                "Spider-Man: Far From Home"
            ]
        },
        {
            "name": "Odin",
            "realName": "Odin Borson",
            "species": "Asgardian",
            "citizenship": "Asgardian",
            "gender": "male",
            "deathDay": "2017",
            "status": "deceased",
            "actors": "Anthony Hopkins",
            "photo": "dbimage/Thor_Ragnarok_Textless_Character_Posters_08.jpg",
            "movies": [
                "Thor",
                "Thor: The Dark World",
                "Thor: Ragnarok "
            ]
        },
        {
            "name": "Peggy Carter",
            "realName": "Margaret Elizabeth Carter",
            "species": "human",
            "citizenship": "British",
            "gender": "female",
            "birthDay": "1921",
            "deathDay": "2016",
            "status": "deceased",
            "actors": "Hayley Atwell",
            "photo": "dbimage/Agent_Carter_Season_2_Promo_01.jpg",
            "movies": [
                "Captain America: The First Avenger",
                "Captain America: The Winter Soldier",
                "Avengers: Endgame"
            ]
        },
        {
            "name": "Pepper Potts",
            "realName": "Virginia Potts",
            "species": "human",
            "citizenship": "American",
            "gender": "female",
            "status": "alive",
            "actors": "Gwyneth Paltrow",
            "photo": "dbimage/F_153752.jpg",
            "movies": [
                "Iron Man",
                "Iron Man 2",
                "The Avengers",
                "Iron Man 3",
                "Spider-Man: Homecoming",
                "Avengers: Infinity War",
                "Avengers: Endgame"
            ]
        },
        {
            "name": "Phil Coulson",
            "realName": "Phillip J. Coulson",
            "species": "human",
            "citizenship": "American",
            "gender": "male",
            "birthDay": "1964",
            "deathDay": "2012",
            "status": "deceased",
            "actors": "Clark Gregg",
            "photo": "dbimage/Coulson_AoS5.jpg",
            "movies": [
                "Iron Man",
                "Iron Man 2",
                "Thor",
                "The Avengers",
                "Captain Marvel"
            ]
        },
        {
            "name": "Quicksilver",
            "realName": "Pietro Maximoff",
            "species": "human",
            "citizenship": "Sokovian",
            "gender": "male",
            "status": "deceased",
            "actors": "Aaron Taylor-Johnson",
            "photo": "dbimage/Qckslvr.jpg",
            "movies": [
                "Avengers: Age of Ultron"
            ]
        },
        {
            "name": "Red Skull",
            "realName": "Johann Schmidt",
            "species": "human",
            "citizenship": "Nazi German",
            "gender": "male",
            "status": "alive",
            "actors": "Hugo Weaving",
            "photo": "dbimage/RedSkullIW.png",
            "movies": [
                "Captain America: The First Avenger",
                "Avengers: Infinity War",
                "Avengers: Endgame"
            ]
        },
        {
            "name": "Scarlet Witch",
            "realName": "Wanda Maximoff",
            "species": "human",
            "citizenship": "sokovian",
            "gender": "female",
            "status": "alive",
            "actors": "Elizabeth Olsen",
            "photo": "dbimage/Scarlet_Witch_AIW_Profile.jpg",
            "movies": [
                "Avengers: Age of Ultron",
                "Captain America: Civil War",
                "Avengers: Infinity War",
                "Avengers: Endgame"
            ]
        },
        {
            "name": "Shuri",
            "realName": "Shuri",
            "species": "human",
            "citizenship": "Wakandan",
            "gender": "female",
            "status": "alive",
            "actors": "Letitia Wright",
            "photo": "dbimage/Shuri_AIW_Profile.jpg",
            "movies": [
                "Black Panther",
                "Avengers: Infinity War",
                "Avengers: Endgame"
            ]
        },
        {
            "name": "Sif",
            "realName": "Sif",
            "species": "Asgardian",
            "citizenship": "Asgardian",
            "gender": "female",
            "status": "alive",
            "actors": "Jaimie Alexander",
            "photo": "dbimage/Sifwhoyoureallyare.jpg",
            "movies": [
                "Thor",
                "Thor: The Dark World"
            ]
        },
        {
            "name": "Spider-Man",
            "realName": "Peter Benjamin Parker",
            "species": "human",
            "citizenship": "American",
            "gender": "male",
            "birthDay": "2001",
            "status": "alive",
            "actors": "Tom Holland",
            "photo": "dbimage/Spider-Man_FFH_Profile.jpg",
            "movies": [
                "Iron Man 2",
                "Captain America: Civil War",
                "Spider-Man: Homecoming",
                "Avengers: Infinity War",
                "Avengers: Endgame",
                "Spider-Man: Far From Home"
            ]
        },
        {
            "name": "Star-Lord",
            "realName": "Peter Jason Quill",
            "species": "human",
            "citizenship": "American",
            "gender": "male",
            "birthDay": "1980",
            "status": "alive",
            "actors": "Chris Pratt",
            "photo": "dbimage/Star-Lord_AIW_Profile.jpg",
            "movies": [
                "Guardians of the Galaxy",
                "Guardians of the Galaxy Vol. 2",
                "Avengers: Infinity War",
                "Avengers: Endgame"
            ]
        },
        {
            "name": "Thanos",
            "realName": "Thanos",
            "species": "Titan",
            "gender": "male",
            "birthDay": "1013",
            "deathDay": "2018",
            "status": "deceased",
            "actors": "Josh Brolin",
            "photo": "dbimage/97d1d9f934a350cee765c5ac1a466605.jpg",
            "movies": [
                "Guardians of the Galaxy",
                "Guardians of the Galaxy Vol. 2",
                "Avengers: Infinity War",
                "Avengers: Endgame"
            ]
        },
        {
            "name": "Thor",
            "realName": "Thor Odinson",
            "species": "Asgardian",
            "citizenship": "Asgardian",
            "gender": "male",
            "birthDay": "964",
            "status": "alive",
            "actors": "Chris Hemsworth",
            "photo": "dbimage/Thor-EndgameProfile.jpg",
            "movies": [
                "Thor",
                "The Avengers",
                "Thor: The Dark World",
                "Avengers: Age of Ultron",
                "Thor: Ragnarok",
                "Avengers: Infinity War",
                "Avengers: Endgame"
            ]
        },
        {
            "name": "Valkyrie",
            "realName": "Brunnhilde",
            "species": "Asgardian",
            "citizenship": "Asgardian",
            "gender": "female",
            "status": "alive",
            "actors": "Tessa Thompson",
            "photo": "dbimage/Thor_Ragnarok_Textless_Character_Posters_05.jpg",
            "movies": [
                "Thor: Ragnarok",
                "Avengers: Endgame"
            ]
        },
        {
            "name": "Vision",
            "realName": "Vision",
            "species": "Android",
            "gender": "male",
            "birthDay": "2015",
            "deathDay": "2018",
            "status": "destroyed",
            "actors": "Paul Bettany",
            "photo": "dbimage/Vision_AIW_Profile.jpg",
            "movies": [
                "Avengers: Age of Ultron",
                "Captain America: Civil War",
                "Avengers: Infinity War"
            ]
        },
        {
            "name": "Vulture",
            "realName": "Adrian Toomes",
            "species": "human",
            "citizenship": "American",
            "gender": "male",
            "status": "alive",
            "actors": "Michael Keaton",
            "photo": "dbimage/Vulture.jpg",
            "movies": [
                "Spider-Man: Homecoming"
            ]
        },
        {
            "name": "War Machine",
            "realName": "James Rupert Rhodes",
            "species": "human",
            "citizenship": "American",
            "gender": "male",
            "birthDay": "1968",
            "status": "alive",
            "actors": "Don Cheadle",
            "photo": "dbimage/WarMachine-EndgameProfile.jpg",
            "movies": [
                "Iron Man",
                "Iron Man 2",
                "Iron Man 3",
                "Avengers: Age of Ultron",
                "Captain America: Civil War",
                "Avengers: Infinity War",
                "Avengers: Endgame"
            ]
        },
        {
            "name": "Wasp",
            "realName": "Hope van Dyne",
            "species": "human",
            "citizenship": "American",
            "gender": "female",
            "birthDay": "1980",
            "status": "alive",
            "actors": "Evangeline Lilly",
            "photo": "dbimage/Textless_AMATW_Character_Posters_02.jpg",
            "movies": [
                "Ant-Man",
                "Ant-Man and the Wasp",
                "Avengers: Endgame"
            ]
        },
        {
            "name": "Winter Soldier",
            "realName": "James Buchanan Barnes",
            "species": "human",
            "citizenship": "American",
            "gender": "male",
            "birthDay": "1917",
            "status": "alive",
            "actors": "Sebastian Stan",
            "photo": "dbimage/Winter_Soldier_AIW_Profile.jpg",
            "movies": [
                "Captain America: The First Avenger",
                "Captain America: The Winter Soldier",
                "Captain America: Civil War",
                "Avengers: Infinity War",
                "Avengers: Endgame"
            ]
        },
        {
            "name": "Wong",
            "realName": "Wong",
            "species": "human",
            "citizenship": "Chinese",
            "gender": "male",
            "status": "alive",
            "actors": "Benedict Wong",
            "photo": "dbimage/Wong_AIW_Profile.jpg",
            "movies": [
                "Doctor Strange",
                "Avengers: Infinity War",
                "Avengers: Endgame"
            ]
        },
        {
            "name": "Yondu Udonta",
            "realName": "Yondu Udonta",
            "species": "Centaurian",
            "gender": "male",
            "deathDay": "2014",
            "status": "deceased",
            "actors": "Michael Rooker",
            "photo": "dbimage/Yondu_Profile%281%29.png",
            "movies": [
                "Guardians of the Galaxy",
                "Guardians of the Galaxy Vol. 2"
            ]
        }
    ];

    const heroesDiv = document.querySelector('.heroes');

    const addHeroes = () => {
        heroesDiv.innerHTML = '';

        for (let i = 0; i < data.length; i++) {
            let newHero = document.createElement('div');

            newHero.innerHTML = `
            <img src="./${data[i].photo}" alt="">
                     <p>${data[i].name}<p>
            `;

            newHero.classList.add('hero');
            if (data[i].name) {
                newHero.setAttribute('name', `${data[i].name}`);
            }
            if (data[i].realName) {
                newHero.setAttribute('realName', `${data[i].realName}`);
            }
            if (data[i].species) {
                newHero.setAttribute('species', `${data[i].species}`);
            }
            if (data[i].citizenship) {
                newHero.setAttribute('citizenship', `${data[i].citizenship}`);
            }
            if (data[i].gender) {
                newHero.setAttribute('gender', `${data[i].gender}`);
            }
            if (data[i].birthDay) {
                newHero.setAttribute('birthDay', `${data[i].birthDay}`);
            }
            if (data[i].deathDay) {
                newHero.setAttribute('deathDay', `${data[i].deathDay}`);
            }
            if (data[i].status) {
                newHero.setAttribute('status', `${data[i].status}`);
            }
            if (data[i].actors) {
                newHero.setAttribute('actors', `${data[i].actors}`);
            }

            if (data[i].movies) {
                let movies = data[i].movies;

                for (let k = 0; k < movies.length; k++) {
                    newHero.setAttribute('movies', `${movies.join(', ')}`)
                }
            }

            heroesDiv.append(newHero);
        }

        let hero = heroesDiv.querySelectorAll('.hero');

        for (let i = 0; i < hero.length; i++) {
            hero[0].classList.add('activeClick');
        }
    };

    const chooseHero = () => {

        let allHeroes = heroesDiv.querySelectorAll('.hero'),
            imgHero = document.querySelector('.imgHero'),
            sliderTextNames = document.querySelector('.slider-text-names'),
            sliderTextValue = document.querySelector('.slider-text-value');

        heroesDiv.addEventListener('click', (event) => {
            let target = event.target;
            target = target.closest('.hero');

            allHeroes.forEach((item, index) => {

                if (target === item) {

                    if (item.classList.contains('activeClick')) {
                        item.classList.remove('activeClick');

                    } else {

                        imgHero.setAttribute('src', item.querySelector('img').getAttribute('src'));
                        item.classList.add('activeClick');

                        sliderTextNames.innerHTML = `

                        name:<br>
                        realName:<br>
                        species:<br>
                        citizenship:<br>
                        gender:<br>
                        birthDay:<br>
                        deathDay:<br>
                        status:<br>
                        actors:<br>
                        movies:<br>

                        `;

                        sliderTextValue.innerHTML = `

                        ${item.getAttribute('name')}<br>
                        ${item.getAttribute('realName')}<br>
                        ${item.getAttribute('species')}<br>
                        ${item.getAttribute('citizenship')}<br>
                        ${item.getAttribute('gender')}<br>
                        ${item.getAttribute('birthDay')}<br>
                        ${item.getAttribute('deathDay')}<br>
                        ${item.getAttribute('status')}<br>
                        ${item.getAttribute('actors')}<br>
                        ${item.getAttribute('movies')}<br>

                        `;
                        slider(item, index);
                    }

                    item.classList.remove('shadow');

                } else {

                    item.classList.remove('activeClick');
                }
            })
        });

        heroesDiv.addEventListener('mouseover', (event) => {
            let target = event.target;
            target = target.closest('.hero');

            allHeroes.forEach((item) => {

                if (target === item) {

                    item.classList.add('mouseEnter');

                }
            })
        });

        heroesDiv.addEventListener('mouseout', (event) => {
            let target = event.target;
            target = target.closest('.hero');

            allHeroes.forEach((item) => {

                if (target === item) {

                    item.classList.remove('mouseEnter');
                }
            })
        });
    };

    const filterHero = () => {
        const filterHero = document.querySelector('.filterHero'),
            input = filterHero.querySelectorAll('input'),
            filterBtn = document.querySelector('.filter-btn'),
            cancelBtn = document.querySelector('.cancel-btn'),
            allHeroes = heroesDiv.querySelectorAll('.hero');

        filterBtn.addEventListener('click', () => {

            for (let h = 0; h < allHeroes.length; h++) {

                for (let i = 0; i < input.length; i++) {

                    if (input[i].checked) {
                        allHeroes[h].classList.add('shadow');

                        if (input[i].getAttribute('name').toLowerCase() ===
                            allHeroes[h].getAttribute('species').toLowerCase()) {

                            allHeroes[h].classList.remove('shadow');

                        } else if (input[i].getAttribute('name').toLowerCase() ===
                            allHeroes[h].getAttribute('gender').toLowerCase()) {

                            allHeroes[h].classList.remove('shadow');

                        } else if (input[i].getAttribute('name').toLowerCase() ===
                            allHeroes[h].getAttribute('status').toLowerCase()) {

                            allHeroes[h].classList.remove('shadow');
                        }

                        cancelBtn.addEventListener('click', () => {

                            input[i].checked = false;
                            allHeroes[h].classList.remove('shadow');

                        })
                    }
                }
            }
        })
    };

    const slider = (item, index) => {
        const arrowNext = document.querySelector('.arrownext'),
            arrowPrev = document.querySelector('.arrowprev');

        let heroesBlock = document.querySelector('.heroes'),
            hero = heroesBlock.querySelectorAll('.hero'),
            sliderImg = document.querySelector('.imgHero'),
            sliderTextValue = document.querySelector('.slider-text-value');


        let attrArray = [],
            current = 0;

        if (index) {
            current = index;
        }

        for (let i = 0; i < hero.length; i++) {
            attrArray[i] = hero[i].querySelector('img').getAttribute('src');
        };

        let size = attrArray.length,
            attrIndex = attrArray[current];

        const update = () => {
            attrIndex = attrArray[current];
            sliderImg.setAttribute('src', attrIndex);
        };

        arrowNext.addEventListener('click', () => {
            current++;

            if (current >= size) {
                current = 0;
            }

            for (let i = 0; i < hero.length; i++) {

                hero[i].classList.remove('activeClick');
                hero[current].classList.add('activeClick');

                sliderTextValue.innerHTML =
                    `
                ${hero[current].getAttribute('name')}<br>
                ${hero[current].getAttribute('realName')}<br>
                ${hero[current].getAttribute('species')}<br>
                ${hero[current].getAttribute('citizenship')}<br>
                ${hero[current].getAttribute('gender')}<br>
                ${hero[current].getAttribute('birthDay')}<br>
                ${hero[current].getAttribute('deathDay')}<br>
                ${hero[current].getAttribute('status')}<br>
                ${hero[current].getAttribute('actors')}<br>
                ${hero[current].getAttribute('movies')}<br>
                    `;
            }

            update();
        });

        arrowPrev.addEventListener('click', () => {

            if (current <= 0) {
                current = size;
            }

            current--;

            for (let i = 0; i < hero.length; i++) {
                hero[i].classList.remove('activeClick');
                hero[current].classList.add('activeClick');

                sliderTextValue.innerHTML =
                    `
                ${hero[current].getAttribute('name')}<br>
                ${hero[current].getAttribute('realName')}<br>
                ${hero[current].getAttribute('species')}<br>
                ${hero[current].getAttribute('citizenship')}<br>
                ${hero[current].getAttribute('gender')}<br>
                ${hero[current].getAttribute('birthDay')}<br>
                ${hero[current].getAttribute('deathDay')}<br>
                ${hero[current].getAttribute('status')}<br>
                ${hero[current].getAttribute('actors')}<br>
                ${hero[current].getAttribute('movies')}<br>
                    `;
            }

            update();
        });

        update();
    };

    addHeroes();
    chooseHero();
    filterHero();
    slider();
});