const mtk = 80;
const bahasaIndonesia = 90;
const bahasaInggris = 89;
const ipa=99

let nilai = Math.floor((mtk + bahasaIndonesia + bahasaInggris +ipa)/4)

    if(typeof mtk == "number" && typeof bahasaIndonesia == "number" && typeof bahasaInggris == "number" && typeof ipa== "number"){
        if(nilai >= 90 && nilai <=100){
            console.log(`
            Rata-rata = ${nilai}
            Grade = A
            `)
        }
        else if(nilai >= 80 && nilai <=89){
            console.log(`
            Rata-rata = ${nilai}
            Grade = B
            `)
        }
        else if(nilai >= 70 && nilai <=79){
            console.log(`
            Rata-rata = ${nilai}
            Grade = C
            `)
        }
        else if(nilai >= 60 && nilai <=69){
            console.log(`
            Rata-rata = ${nilai}
            Grade = D
            `)
        }
        else if(nilai >= 0 && nilai <=59){
            console.log(`
            Rata-rata = ${nilai}
            Grade = E
            `)
        }
        else{
            console.log("Nilai tidak ditemukan")
        }
    }

    else{
        console.log("semua nilai tersebut harus diisi dan bernilai number")
    }
