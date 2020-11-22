const SpoNavT5 = extendContent(UnitType, "leviathan", {
});
SpoNavT5.constructor = () => extend(UnitWaterMove, {
	update(){
			this.heal(Time.delta() * 0.9);
	},
});
SpoNavT5.abilities.add(new UnitSpawnAbility(UnitTypes.risso, 60 * 45, 0, -12));
SpoNavT5.ammoType = AmmoTypes.powerHigh;

var upgrade = new Seq([Vars.content.getByName(ContentType.unit, "diamond-ore-charybdis"), Vars.content.getByName(ContentType.unit, "diamond-ore-leviathan")]);
Blocks.tetrativeReconstructor.upgrades.add(upgrade.toArray(UnitType));
