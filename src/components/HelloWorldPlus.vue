<template>
  <div id="app">
    <p>Kérem a neved: <input type = "text" v-model = "nev" /></p>
    <h1>Hello {{nev}}{{felkialtojelek}}</h1>
    <p>Felkiáltójelek száma: {{felkialtojelDarab}}</p>
    <button v-on:click="OnClick('+')" v-bind:disabled="felkialtojelDarab == 10">Plus</button>
    <button v-on:click="OnClick('-')"  v-bind:disabled="felkialtojelDarab == 1">Minus</button>
    <ol>
      <li v-for="nap in  napok" v-bind:key="nap">{{nap}}</li>
    </ol>
    <p>Nap: <input type = "text" v-model = "inputNap" /></p>
    <button v-on:click="HozzadNap" >Nap hozzáadása</button>
    <button v-on:click="TorolNap" >Nap törlése</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

@Component
export default class HelloWorldPlus extends Vue {
  private felkialtojelDarab: number;
  private nev: string;
  private felkialtojelek: string;
  private napok = ["hétfő", "kedd", "szerda"];
  private inputNap: string;

  constructor() {
    super();
    this.felkialtojelDarab = 3;
    this.nev = "Jedlik Ányos";
    this.felkialtojelek = "!!!";
    this.inputNap = "";
  }

  private OnClick(művelet: string): void {
    if (művelet == "+" && this.felkialtojelDarab < 10) this.felkialtojelDarab++;
    else if (művelet == "-" && this.felkialtojelDarab > 1)
      this.felkialtojelDarab--;
  }

  private HozzadNap(): void {
    let joNap = [
      "hétfő",
      "kedd",
      "szerda",
      "csütörtök",
      "péntek",
      "szombat",
      "vasárnap"
    ];
    if (!this.napok.includes(this.iNap) && joNap.includes(this.iNap)) {
      this.napok.push(this.inputNap.toLowerCase());
    }
    this.inputNap = "";
  }

  private TorolNap(): void {
    this.napok = this.napok.filter(i => i !== this.inputNap);
    this.inputNap = "";
  }

  // computed
  private get iNap(): string {
    return this.inputNap.toLowerCase();
  }

  @Watch("felkialtojelDarab")
  private onNumChanged(value: number, oldValue: number) {
    this.felkialtojelek = "!".repeat(this.felkialtojelDarab);
  }
}
</script>

<style scoped>
h1 {
  color: blue;
}
button {
  margin: 5px;
}
</style>
