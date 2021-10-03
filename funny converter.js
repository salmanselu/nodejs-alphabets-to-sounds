
pronounciation = {
    'a':'ah',
    'b':'beh',
    'c':'tseh',
    'd':'deh',
    'e':'eh',
    'f':'eff',
    'g':'geh',
    'h':'hah',
    'i':'ee',
    'j':'yot',
    'k':'kah',
    'l':'ell',
    'm':'em',
    'n':'en',
    'o':'oh',
    'p':'peh',
    'q':'ku',
    'r':'err',
    's':'ess',
    't':'teh',
    'u':'oo',
    'v':'fau',
    'w':'veh',
    'x':'iks',
    'y':'upsilonn',
    'z':'tsett',
};

let message = "pethu";
let output = "";
for(i=0; i<message.length; i++){
    output += `${pronounciation[message[i]]} `;
}
console.log(output);
