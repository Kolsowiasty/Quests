class Gun {
  private ammo: number;

  constructor(Ammunition: number) {
    if (Ammunition <= 0) {
      throw new Error("You need to have ammunition!");
    }
    this.ammo = Ammunition;
  }

  shooting(): void {
    if (this.ammo == 0) {
      throw new Error("Empty magazine");
    }

    console.log("fire");
    this.ammo--;
  }
}

const myGun = new Gun(12);

for (let i = 0; i < 15; i++) {
  try {
    myGun.shooting();
  } catch (error) {
    console.error(error.message);
  }
}
