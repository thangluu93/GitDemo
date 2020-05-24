let price;

function tinhtiendien(kwh) {
    if (kwh >= 0 && kwh <= 50) {
        price = kwh * 1678;
    } else if (kwh >= 51 && kwh <= 100) {
        price = 50 * 1678 + ((kwh - 50) * 1734);
    } else if (kwh >= 101 && kwh <= 200) {
        price = 50 * 1678 + 50 * 1734 + ((kwh - 100) * 2014);
    } else if (kwh >= 201 && kwh <= 300) {
        price = 50 * 1678 + 50 * 1734 + 100 * 2014 + ((kwh - 200) * 2536);
    } else if (kwh >= 301 && kwh <= 400) {
        price = 50 * 1678 + 50 * 1734 + 100 * 2014 + 100 * 2536((kwh - 300) * 2834);
    } else if (kwh >= 401) {
        price = 50 * 1678 + 50 * 1734 + 100 * 2014 + 100 * 2536 + 100 * 2834((kwh - 400) * 2927);
    }
    price = price * 1.1;
    console.log(price);
}

tinhtiendien(20);