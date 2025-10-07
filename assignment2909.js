function SurfaceArea(r,l) {
    
    return Math.PI * r* r + Math.PI * r* l;
}

function Volume(r, h) {
    
    return (1/3) * Math.PI * r * r * h;
}

function main() {
    
    let r = 7;
    let h = 6;
    let l= 8;

  
    let area = SurfaceArea(r,l);
    let volume = Volume(r, h);

    
    console.log("Surface Area: " + area.toFixed(2));
    console.log("Volume: " + volume.toFixed(2));
}


main();
