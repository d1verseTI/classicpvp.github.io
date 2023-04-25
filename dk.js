const Spells = {
    CHAINS_OF_ICE: {
        name: 'Chains of Ice',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_frost_chainsofice.jpg',
        link: 'https://www.wowhead.com/wotlk/spell=45524/chains-of-ice'

    },
    PLAGUE_STRIKE: {
        name: 'Plague Strike',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_deathknight_empowerruneblade.jpg',
        link: 'https://www.wowhead.com/wotlk/spell=49921/plague-strike'
    },
    HORN_OF_WINTER: {
        name: 'Horn of Winter',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_misc_horn_02.jpg',
        link: 'https://www.wowhead.com/wotlk/spell=57623/horn-of-winter'
    },
    BLOOD_STRIKE: {
        name: 'Blood Strike',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_deathknight_deathstrike.jpg',
        link: 'https://www.wowhead.com/wotlk/spell=49930/blood-strike'
    },
    SCOURGE_STRIKE: {
        name: 'Scourge Strike',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_deathknight_scourgestrike.jpg',
        link: 'https://www.wowhead.com/wotlk/spell=55271/scourge-strike'
    },
    DEATH_COIL: {
        name: 'Death Coil',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_deathcoil.jpg',
        link: 'https://www.wowhead.com/wotlk/spell=49895/death-coil',
    },
    GARGOYLE: {
        name: 'Summon Gargoyle',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_hunter_pet_bat.jpg',
        link: 'https://www.wowhead.com/wotlk/spell=49206/summon-gargoyle'
    },
    EMPOWER_RUNE_WEAPON: {
        name: 'Empower Rune Weapon',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_sword_62.jpg',
        link: 'https://www.wowhead.com/wotlk/spell=47568/empower-rune-weapon'
    },
    PESTILENCE: {
        name: 'Pestilence',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_plaguecloud.jpg',
        link: 'https://www.wowhead.com/wotlk/spell=50842/pestilence'
    },
    DEATH_GRIP: {
        name: 'Death Grip',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_deathknight_strangulate.jpg',
        link: 'https://www.wowhead.com/wotlk/spell=49576/death-grip'
    },
    STRANGULATE: {
        name: 'Strangulate',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_soulleech_3.jpg',
        link: 'https://www.wowhead.com/wotlk/spell=47476/strangulate'
    },
    BLOOD_TAP: {
        name: 'Blood Tap',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_deathknight_bloodtap.jpg',
        link: 'https://www.wowhead.com/wotlk/spell=45529/blood-tap'
    },
    GNAW: {
        name: 'Gnaw',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_deathknight_gnaw_ghoul.jpg',
        link: 'https://www.wowhead.com/wotlk/spell=47481/gnaw'
    },
    CORPSE_EXPLOSION: {
        name: 'Corpse Explosion',
        icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_creature_disease_02.jpg',
        link: 'https://www.wowhead.com/wotlk/spell=51328/corpse-explosion'
    },
};

const basicRotation = [
    Spells.CHAINS_OF_ICE,
    Spells.PLAGUE_STRIKE,
    Spells.HORN_OF_WINTER,
    Spells.BLOOD_STRIKE,
    Spells.SCOURGE_STRIKE,
    Spells.DEATH_COIL,
    Spells.DEATH_COIL,
];

const burstRotation = [
    Spells.CHAINS_OF_ICE,
    Spells.PLAGUE_STRIKE,
    Spells.BLOOD_STRIKE,
    Spells.BLOOD_STRIKE,
    Spells.HORN_OF_WINTER,
    Spells.SCOURGE_STRIKE,
    Spells.GARGOYLE,
    Spells.EMPOWER_RUNE_WEAPON,
    Spells.SCOURGE_STRIKE,
    Spells.SCOURGE_STRIKE,
    Spells.BLOOD_STRIKE,
    Spells.DEATH_COIL,
    Spells.DEATH_COIL,
    Spells.DEATH_COIL,
    Spells.SCOURGE_STRIKE,
];

const killHealerRotation = [
    Spells.GARGOYLE,
    Spells.PESTILENCE,
    Spells.EMPOWER_RUNE_WEAPON,
    Spells.CHAINS_OF_ICE,
    Spells.DEATH_GRIP,
    Spells.STRANGULATE,
    Spells.BLOOD_TAP,
    Spells.PLAGUE_STRIKE,
    Spells.SCOURGE_STRIKE,
    Spells.DEATH_COIL,
    Spells.GNAW,
    Spells.CORPSE_EXPLOSION,
    Spells.DEATH_COIL,
]


