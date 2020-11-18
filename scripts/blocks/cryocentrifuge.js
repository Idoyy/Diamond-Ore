extendContent(GenericCrafter, "cryocentrifuge", {
	drawBase(tile){
		Draw.rect(this.region, tile.drawx(), tile.drawy());

		Draw.color(this.outputLiquid.liquid.color);
		Draw.alpha(this.tile.liquids.get(this.outputLiquid.liquid) / this.liquidCapacity);
		Draw.rect(Core.atlas.find(this.name + "-liquid"), tile.drawx(), tile.drawy());
		Draw.color();
        Draw.rect(Core.atlas.find(this.name + "-rotator"),tile.drawx(),tile.drawy(), -6 * tile.ent().totalProgress);
		Draw.rect(Core.atlas.find(this.name + "-top"), tile.drawx(), tile.drawy());
	},
    icons(){
        return [
            Core.atlas.find(this.name),
            Core.atlas.find(this.name + "-rotator"),
            Core.atlas.find(this.name + "-top"),
        ];
    }
});