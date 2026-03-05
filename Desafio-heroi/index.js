let name = "Hulk";
let XP = 1200;
let nivel = "";

switch (true) {
    case XP >= 10001:
        nivel = "Radiante";
        break;
    case XP >= 9001:
        nivel = "Imortal";
        break;
    case XP >= 8001:
        nivel = "Ascendente";
        break;
    case XP >= 7001:
        nivel = "Platina";
        break;
    case XP >= 5001:
        nivel = "Ouro";
        break;
    case XP >= 2001:
        nivel = "Prata";
        break;
    case XP >= 1001:
        nivel = "Bronze";
        break;
    case XP <= 1000:
        nivel = "Ferro";
        break;
    default:
        nivel = "Indefinido";
        break;
}

console.log(`O Herói de nome ${name} está no nível de ${nivel}`);