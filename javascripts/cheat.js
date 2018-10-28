//to cheat
function doubleStars() {
	player.stars=player.stars.times(2)
}

function squareStars() {
	player.stars=player.stars.pow(2)
}

function unlockAllMilestones() {
	player.milestones=milestoneRequirements.length
	updateMilestones()
}

function doublePP() {
	player.prestigePower=player.prestigePower.times(2)
}

function squarePP() {
	player.prestigePower=player.prestigePower.pow(2)
}

function doubleTP() {
	player.transferPoints=player.transferPoints.times(2)
}

function squareTP() {
	player.transferPoints=player.transferPoints.pow(2)
}

function freeUpgrades() {
	player.transferUpgrades=[1,2,3,4,5,6,7,8,9,10,11,12,13,14]
}

function showTooMuchCheat() {
	showTooMuch=true
}

function freeSupernova() {
	if (player.stars.lt(Number.MAX_VALUE)) player.stars=new Decimal(Number.MAX_VALUE)
	reset(3)
}

function doubleNS() {
	player.neutronStars=player.neutronStars.times(2)
}

function squareNS() {
	player.neutronStars=player.neutronStars.pow(2)
}

function freeSNUpgrades() {
	player.supernovaUpgrades=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
}

function respec() {
	player.supernovaUpgrades=[]
}

function getAllAchievements() {
	player.achievements=[1,2,3,4,5,6,7,8,9,10,11,12,13]
	updateStory()
}

function unlockAll() {
	player.supernovaTabsUnlocked=5
}

function unlockChallenges() {
	player.challengeUnlocked=12
}

function completeChallenges() {
	for (j=1;j<16;j++) {
		if (player.challengesCompleted[j]==undefined) {
			player.challengesCompleted[j]=1
			if (j<13) player.rewardBoxes[0]+=1
		}
	}
	if (player.autobuyers.interval==undefined) player.autobuyers.interval=10
	if (player.autobuyers.upgrade==undefined) player.autobuyers.upgrade={lastTick:player.playtime,disabled:false}
	updateAutobuyers()
}

function openAllRewardBoxes() {
	while (player.rewardBoxes[0]>0) unlockAutobuyer()
}

function unlockAutobuyerFeatures() {
	if (!player.buyinshopFeatures.includes(5)) {
		player.autobuyers.transfer.tp=new Decimal(1e10)
		updateAutobuyers()
	}
	if (!player.buyinshopFeatures.includes(6)) player.autobuyers.supernova={lastTick:player.playtime,disabled:false,ns:new Decimal(100)}
	if (!player.buyinshopFeatures.includes(8)) {
		player.autobuyers.transfer.tpDisabled=false
	}
	player.buyinshopFeatures=[1,2,3,4,5,6,7,8]
	updateAutobuyers()
}

function freeAutobuyerUpgrades() {
	player.autobuyers.interval=0.05
	if (player.autobuyers.gens!=undefined) player.autobuyers.gens.bulk=(player.breakLimit)?9007199254740992:256
}

function freeNeutronBoostUpgrades() {
	player.neutronBoosts.powers=[40,40,60]
	player.neutronBoosts.basePower=10
	player.neutronBoosts.ppPower=0.15
}

function unlockAliens() {
	player.supernovaTabsUnlocked=5
	player.aliens.unlocked=true
}

function breakLimitNS() {
	player.cheatOptions.breakLimitNS=!player.cheatOptions.breakLimitNS
}
