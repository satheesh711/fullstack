const quotes =[
    "ఒక కలని సాధించడం అసాధ్యం చేసే ఒకే ఒక్క విషయం ఉంది: వైఫల్యం భయం.",
    "వైఫల్యానికి భయపడకండి, కానీ ప్రయత్నించకూడదని భయపడండి.",
    "నా తప్పు, నా వైఫల్యం, నేను కలిగి ఉన్న అభిరుచులలో కాదు, వాటిని నియంత్రించకపోవడం.",
    'ప్రతి ప్రతికూలత, ప్రతి వైఫల్యం, ప్రతి గుండె నొప్పి దానితో సమానమైన లేదా అంతకంటే ఎక్కువ ప్రయోజనాన్ని కలిగి ఉంటాయి.',
    'పంచుకోని ఆనందాన్ని ఆనందం అని పిలవలేము; దానికి రుచి లేదు.',
    "సంతోషంగా ఉండటం సంతృప్తి, సంతృప్తి చెందడం అంటే అంగీకరించడం.",
    "A rose by any other name would smell as sweet.",
    "All that glitters is not gold.",
    "All the world’s a stage, and all the men and women merely players.",
    "Ask not what your country can do for you; ask what you can do for your country.",
    "Ask, and it shall be given you; seek, and you shall find.",
    "Go ahead, make my day.",
    "He travels the fastest who travels alone.",
    "I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.",
    "I think therefore I am.",
    "If you build it, they will come."
    ]
let con=document.getElementById('con')
let ind=Math.floor(Math.random()*quotes.length)
con.textContent=quotes[ind]
function getquotes(){
    ind=Math.floor(Math.random()*quotes.length)
    con.textContent=quotes[ind]
}

