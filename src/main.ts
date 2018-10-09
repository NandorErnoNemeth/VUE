export default class  Tabla {
   
    let T: string[][];
    let H: number[];
  
    public constructor() {
      T: [8][8];
      H: [100];
    }
  
    public Elhelyez(db: number, min: number, max: number, mit: string): void {
      for (let index = 0; index < db; ) {
        const sor: number = Math.floor(Math.random() * max + 1) + min;
        const oszlop: number = Math.floor(Math.random() * max + 1) + min;
  
        if (this.T[sor][oszlop] != "G" && this.T[sor][oszlop] != "B") {
          this.T[sor][oszlop] = mit;
          index++;
        }
      }
    }
  
    public Bastya_ertek(sor: number, oszlop: number): any {
      let ertek: number = 0;
  
      let kijut = true;
      //balra
      for (let index = oszlop - 1; index >= 0; index--) {
        if (this.T[sor][index] != "\0") {
          kijut = false;
          break;
        }
      }
      if (kijut) ertek++;
  
      //jobbra
      for (let index = oszlop + 1; index < this.T.length; index++) {
        if (this.T[sor][index] != "\0") {
          kijut = false;
          break;
        }
      }
      if (kijut) ertek++;
  
      //fel
      for (let index = sor - 1; index >= 0; index--) {
        if (this.T[index][oszlop] != "\0") {
          kijut = false;
          break;
        }
      }
      if (kijut) ertek++;
  
      //le
      for (let index = sor + 1; index < this.T.length; index++) {
        if (this.T[index][oszlop] != "\0") {
          kijut = false;
          break;
        }
      }
      if (kijut) ertek++;
  
      return ertek;
    }
    public Bastyak_ertekei(): void {
      for (let sor = 0; sor < this.T.length; sor++) {
        for (let oszlop = 0; oszlop < this.T.length; oszlop++) {
          if (this.T[sor][oszlop] == "B") {
            let ertek = this.Bastya_ertek(sor, oszlop);
            this.T[sor][oszlop] = String(ertek);
            //this.H.add
          }
        }
      }
    }
    //2.feladat
    public Megjelenit(): any {
      let kiiras;
  
      for (let sor = 0; sor < this.T.length; sor++) {
        for (let oszlop = 0; oszlop < this.T.length; oszlop++) {
          if (this.T[sor][oszlop] != "\0") {
            kiiras = kiiras + this.T[sor][oszlop];
          } else {
            kiiras = kiiras + "#";
          }
        }
        kiiras = kiiras + "\n";
      }
      return kiiras;
    }
  }
