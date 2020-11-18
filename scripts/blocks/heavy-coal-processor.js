extendContent(GenericCrafter, "heavy-coal-processor", {
	drawBase(tile){
		Draw.rect(this.region, tile.drawx(), tile.drawy());
		Draw.color(this.tile.liquids.current().color);
		Draw.alpha(this.tile.liquids.currentAmount() / this.liquidCapacity);
		Draw.rect(Core.atlas.find(this.name + "-liquid"), tile.drawx(), tile.drawy());
		Draw.color();
        Draw.rect(Core.atlas.find(this.name + "-spinner-a"),tile.drawx(),tile.drawy(), -180 * this.tile.progress);
        Draw.rect(Core.atlas.find(this.name + "-spinner-b"),tile.drawx(),tile.drawy(), 180 * this.tile.progress);
		Draw.reset();
	},
    icons(){
        return [
            Core.atlas.find(this.name),
            Core.atlas.find(this.name + "-spinner-a"),
            Core.atlas.find(this.name + "-spinner-b"),
        ];
    }
});