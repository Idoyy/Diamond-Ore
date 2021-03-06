const DeathGooFragment = extend(BasicBulletType, {});

DeathGooFragment.damage = 25;
DeathGooFragment.splashDamage = 15;
DeathGooFragment.splashDamageRadius = 16;
DeathGooFragment.bulletWidth = 3;
DeathGooFragment.bulletHeight = 6;
DeathGooFragment.lifetime = 45;
DeathGooFragment.drag = 0.015;
DeathGooFragment.pierce = true;
DeathGooFragment.despawnEffect = Fx.none;
DeathGooFragment.hitEffect = Fx.none;
DeathGooFragment.frontColor = Color.valueOf("#887ab6");
DeathGooFragment.backColor = Color.valueOf("#8822aa");
DeathGooFragment.bulletSprite = "diamond-ore-diamondbullet";
const DeathGoo = extend(ArtilleryBulletType, {});
//const deathGoo = extendContent(Liquid, "corrupt-water", {});

DeathGoo.speed = 3.5;
DeathGoo.damage = 4;
DeathGoo.splashDamage = 12;
DeathGoo.splashDamageRadius = 16;
DeathGoo.bulletWidth = 12;
DeathGoo.bulletHeight = 72;
DeathGoo.bulletShrink = 0.8333333;
DeathGoo.lifetime = 75;
DeathGoo.drag = 0.03;
DeathGoo.pierce = true;
DeathGoo.homingPower = 5;
DeathGoo.homingRange = 8;
DeathGoo.fragBullets = 4;
DeathGoo.fragBullet = DeathGooFragment;
DeathGoo.fragVelocityMin= 0.45;
DeathGoo.fragVelocityMax= 1.8;
DeathGoo.frontColor = Color.valueOf("#7a0096");
DeathGoo.backColor = Color.valueOf("#7a00a6");
DeathGoo.trailEffect = Fx.steam;
DeathGoo.despawnEffect = Fx.ripple;
DeathGoo.hitEffect = Fx.none;
DeathGoo.bulletSprite = "diamond-ore-diamondbullet";
const sporeFortress = extendContent(UnitType, "spore-fortress", {
    
});
sporeFortress.create(prov(() => new JavaAdapter(GroundUnit, { 
    onDeath(){
        Sounds.explosionbig.at(this);
        for(var i = 0; i < 17; i++){
            Calls.createBullet(DeathGoo, this.getTeam(), this.x, this.y, Mathf.random(360), Mathf.random(0.45, 1.2), Mathf.random(0.4, 1.0));
		}
        for(var i = 0; i < 3; i++){
            Calls.createBullet(DeathGoo, Team.derelict, this.x, this.y, Mathf.random(360), Mathf.random(0.35, 1.6), Mathf.random(0.7, 1.4));
		}
    this.super$onDeath();
    }
})));