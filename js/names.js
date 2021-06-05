const syllables = [
    [
        'A',
        'Ael',
        'Af',
        'Ak',
        'Al',
        'Am',
        'An',
        'Ar',
        'Baf',
        'Bar',
        'Bee',
        'Bel',
        'Ber',
        'Berd',
        'Bes',
        'Bo',
        'Bo',
        'Bol',
        'Bor',
        'Bran',
        'Brose',
        'Bru',
        'Bur',
        'Car',
        'Chor',
        'Cig',
        'Cla',
        'Da',
        'Da',
        'Dan',
        'Do',
        'Do',
        'Dock',
        'Doh',
        'Don',
        'Dor',
        'Dor',
        'Dre',
        'Drebb',
        'E',
        'Eg',
        'Ek',
        'El',
        'El',
        'End',
        'Er',
        'Er',
        'Es',
        'Eth',
        'Eth',
        'Ev',
        'Fal',
        'Fan',
        'Far',
        'Feg',
        'Fen',
        'Fi',
        'Ful',
        'Fum',
        'Ga',
        'Gahn',
        'Gaith',
        'Gar',
        'Gar',
        'Gen',
        'Ger',
        'Glen',
        'Go',
        'Go',
        'Gram',
        'Grink',
        'Gulf',
        'Ha',
        'Hag',
        'Hal',
        'Han',
        'Harg',
        'Ho',
        'Hol',
        'Hor',
        'I',
        'Ig',
        'In',
        'Ith',
        'Jax',
        'Jo',
        'Jur',
        'Ka',
        'Kan',
        'Kra',
        'Krac',
        'Ky',
        'La',
        'Laf',
        'Lag',
        'Lap',
        'Le',
        'Lef',
        'Lem',
        'Lis'
    ],
    [
        'Lo',
        'Lu',
        'Mal',
        'Mar',
        'Me',
        'Mer',
        'Mez',
        'Mez',
        'Mich',
        'Mil',
        'Mis',
        'Mo',
        'Mo',
        'Moo',
        'Mul',
        'Mun',
        'Mun',
        'Mur',
        'Mus',
        'Na',
        'Na',
        'Ned',
        'Nes',
        'Nick',
        'No',
        'Nor',
        'Nos',
        'Nu',
        'O',
        'Omes',
        'Os',
        'Pal',
        'Pen',
        'Phil',
        'Po',
        'Pos',
        'Poy',
        'Pres',
        'Pus',
        'Quas',
        'Que',
        'Ra',
        'Rag',
        'Ralt',
        'Ram',
        'Ray',
        'Ree',
        'Rem',
        'Rin',
        'Ris',
        'Ro',
        'Ro',
        'Ron',
        'Sa',
        'Sa',
        'See',
        'Ser',
        'Shal',
        'Sho',
        'Sho',
        'Sil',
        'Sit',
        'Spor',
        'Sun',
        'Sur',
        'Sus',
        'Tar',
        'Tar',
        'Tas',
        'Tee',
        'Ten',
        'Ten',
        'Teth',
        'To',
        'To',
        'Ton',
        'Ton',
        'Tra',
        'Treb',
        'Tred',
        'Tue',
        'U',
        'Va',
        'Vak',
        'Ven',
        'Ver',
        'Wal',
        'Web',
        'Wil',
        'Xor',
        'Y',
        'Yor',
        'Ys',
        'Zef',
        'Zell',
        'Zen',
        'Zer',
        'Zo',
        'Zo',
        'Zort'
    ]
];

const titles = [
    'from Above    ',
    'from Afar    ',
    'from Below    ',
    'the Adept    ',
    'the Albino    ',
    'the Antiquarian    ',
    'the Arcane    ',
    'the Archaic    ',
    'the Barbarian    ',
    'the Batrachian    ',
    'the Battler    ',
    'the Bilious    ',
    'the Bold    ',
    'the Brave    ',
    'the Civilized    ',
    'the Collector    ',
    'the Cryptic    ',
    'the Curious    ',
    'the Dandy    ',
    'the Daring    ',
    'the Decadent    ',
    'the Delver    ',
    'the Distant    ',
    'the Eldritch    ',
    'the Exotic    ',
    'the Explorer    ',
    'the Fair    ',
    'the Fearless    ',
    'the Fickle    ',
    'the Foul    ',
    'the Furtive    ',
    'the Gambler    ',
    'the Ghastly    ',
    'the Gibbous    ',
    'the Great    ',
    'the Grizzled    ',
    'the Gruff    ',
    'the Hairy/Bald    ',
    'the Haunted    ',
    'the Heavy/Lean    ',
    'the Hooded/Cowled    ',
    'the Hunter    ',
    'the Imposing    ',
    'the Irreverent    ',
    'the Loathsome    ',
    'the Loud/Quiet    ',
    'the Lovely    ',
    'the Mantled    ',
    'the Masked/Veiled    ',
    'the Merciful/Merciless    ',
    'the Mercurial    ',
    'the Mighty    ',
    'the Morose    ',
    'the Mutable    ',
    'the Mysterious    ',
    'the Obscure    ',
    'the Old/Young    ',
    'the Ominous    ',
    'the Peculiar    ',
    'the Perceptive    ',
    'the Pious    ',
    'the Quick    ',
    'the Ragged    ',
    'the Ready    ',
    'the Rough    ',
    'the Rugose    ',
    'the Scarred    ',
    'the Searcher    ',
    'the Shadowy    ',
    'the Short/Tall    ',
    'the Steady    ',
    'the Uncanny    ',
    'the Unexpected    ',
    'the Unknowable    ',
    'the Verbose    ',
    'the Vigorous    ',
    'the Wanderer    ',
    'the Wary    ',
    'the Weird    ',
    'the [Pick Color]   ',
    'the First - Tenth [roll d]',
    'of the [Pick Color] Cloak ',
    'of the [Pick Direction]  ',
    'of the Arid Wastes  ',
    'of the Beetling Brow  ',
    'of the Cyclopean City  ',
    'of the Dread Wilds  ',
    'of the Eerie Eyes  ',
    'of the Foetid Swamp  ',
    'of the Forgotten City  ',
    'of the Haunted Heath  ',
    'of the Hidden Valley  ',
    'of the Howling Hills  ',
    'of the Jagged Peaks  ',
    'of the Menacing Mien  ',
    'of the Savage Isle  ',
    'of the Tangled Woods  ',
    'of the Watchful Eyes  ',
    'Roll again and add Class ',
    'Roll again and add Race '
];

let dieRoll = function(num, sides) {
    let result = 0;
    for (var i = 0; i < num; i++) {
        result += (Math.floor(Math.random() * sides) + 1);
    }
    return result;
}

let generateName = function() {

    let die = dieRoll(1, 100);
    let numSyllables = 1;
    
    if (die >= 11) numSyllables = 2;
    if (die >= 71) numSyllables = 3;
    if (die >= 91) numSyllables = 4;

    let name = {
        parts: [],
        title: ''
    };

    for (var i = 0; i < numSyllables; i++) {
        die = dieRoll(1, 6);
        let sIndex = 0;
        if (die >= 4) sIndex = 1;
        die = dieRoll(1, 100) - 1;
        name.parts.push(syllables[sIndex][die]);
    }       

    return composeName(name);
}

let composeName = function(name) {
    let finalName = '';

    for (const part of name.parts) {
        finalName += part;
        let d = dieRoll(1, 100);
        if (d < 20) {
            finalName += "'";
        } else if (d < 40) {
            finalName += " ";
        }
    }

    finalName += name.title;

    return fixCase(finalName);
}

let fixCase = function(name) {
    let result = '';
    let lastLetter = '';

    for (var i = 0; i < name.length; i++) {
        var c = name.charAt(i).toLowerCase();
        
        if (lastLetter == '' || lastLetter == "'" || lastLetter == " ") {
            result += c.toUpperCase();
        } else {
            result += c;
        }

        lastLetter = c;
    }    

    return result;
}

let makeNames = function() {
    let result = '';
    for (var i = 0; i < 10; i++) {
        let title = ''
        if (dieRoll(1, 100) > 50) {
            die = dieRoll(1, 100) - 1;
            title = titles[die];
        }
        result = result + `<li>${generateName()} ${title}</li>`;
    }
    document.getElementById('names').innerHTML = result;
}

document.getElementById('genBtn').addEventListener('click', makeNames);