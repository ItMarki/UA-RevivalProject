player={version:0.7,
	beta:12,
	alpha:8.11,
	playtime:0,
	updateRate:20,
	lastUpdate:0,
	notation:'Standard',
	layout:1,
	offlineProgress:true,
	explanations:false,
	useMonospaced:false,
	hotkeys:true,
	theme:'Normal',
	showProgress:false,
	milestones:0,
	storyEnabled:false,
	stars:new Decimal(10),
	totalStars:new Decimal(0),
	generators:[{amount:new Decimal(0),bought:0},{amount:new Decimal(0),bought:0},{amount:new Decimal(0),bought:0},{amount:new Decimal(0),bought:0},{amount:new Decimal(0),bought:0},{amount:new Decimal(0),bought:0},{amount:new Decimal(0),bought:0},{amount:new Decimal(0),bought:0},{amount:new Decimal(0),bought:0},{amount:new Decimal(0),bought:0}],
	prestiges:[0,0,0,0,0,0],
	prestigePeak:[new Decimal(1),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0)],
	highestTierPrestiges:[0,0,0,0,0,0],
	prestigePlaytime:0,
	prestigePower:new Decimal(1),
	transferPlaytime:0,
	transferPoints:new Decimal(0),
	totalTP:new Decimal(0),
	gainPeak:[0,0],
	transferUpgrades:[],
	overlimit:false,
	supernovaPlaytime:0,
	fastestSupernova:Number.MAX_VALUE,
	lastSupernovas:[],
	neutronStars:new Decimal(0),
	totalNS:new Decimal(0),
	supernovaUpgrades:[],
	headstarts:true,
	supernovaHeadstart:true,
	supernovaTabsUnlocked:0,
	achievements:[],
	ach2possible:false,
	challengeUnlocked:0,
	currentChallenge:0,
	challPow:new Decimal(1),
	chall14Stuff:[],
	challengesCompleted:{},
	challConfirm:true,
	rewardBoxes:[0,0,0],
	autobuyers:{},
	buyinshopFeatures:[],
	autobuyerPriorities:[1,2,3,4,5,6,7,8,9,10],
	preSupernova:false,
	breakLimit:false,
	neutronBoosts:{basePower:0,powers:[0,0,0],ppPower:0},
	neutrons:new Decimal(0),
	neutronTiers:[{amount:new Decimal(0),bought:0},{amount:new Decimal(0),bought:0},{amount:new Decimal(0),bought:0},{amount:new Decimal(0),bought:0},{amount:new Decimal(0),bought:0},{amount:new Decimal(0),bought:0},{amount:new Decimal(0),bought:0},{amount:new Decimal(0),bought:0},{amount:new Decimal(0),bought:0},{amount:new Decimal(0),bought:0}],
	totalNeutrons:new Decimal(0),
	secondSetUnlocked:false,
	aliens:{lastTick:0,
		amount:0,
		progress:0,
		resets:0,
		kept:0,
		upgrades:[0,0,0,0,0,0] /*1: Interval reduction
			2: Progress gain
			3: Amount limit
			4: Special # of supernovas
			5: Keep the fraction of free neutron boost powers each alien supernova
			6: Interval increase each alien supernova*/},
	quarkStars:new Decimal(0),
	perks:{},
	unlockables:{},
	neutronChallengesUnlocked:[],
	currentNeutronChallenge:0,
	neutronChallengesCompleted:[],
	stellarBots:{},
	particles:new Decimal(0),
	strings:new Decimal(0),
	cheatOptions:{breakLimitNS:false}}
ordinals=['1st','2nd','3rd','4th','5th','6th','7th','8th','9th','10th']
				
lastSave=0
themeSelected='Normal'
milestoneRequirements=['Buy the first generator','Buy first tier 2 generator','Buy first tier 3 generator','Buy first tier 4 generator','Buy first tier 5 generator','Buy first tier 6 generator','Buy first tier 7 generator','Buy first tier 8 generator','Buy first tier 9 generator','Buy first tier 10 generator',
	'Buy 5 10th tier generators','Prestige for first time','Reach 5x prestige power','Reach 10x prestige power','Reach 20x prestige power','Reach 50x prestige power','Reach 75x prestige power','Transfer for first time','Buy 2 transfer upgrades','Buy 3 transfer upgrades',
	'Buy 8 transfer upgrades','Buy 12 transfer upgrades','Buy 14 transfer upgrades','Supernova for first time','Buy 2 supernova upgrades','Buy 4 supernova upgrades','Buy 8 supernova upgrades','Buy 12 supernova upgrades','Earn 100 neutron stars in total','Unlock challenges',
	'Complete a challenge','Complete 2 challenges','Complete 4 challenges','Complete 8 challenges','Complete 12 challenges','Max all of autobuyer upgrades','Buy 1 buyinshop feature','Buy 2 buyinshop features','Buy 4 buyinshop features','Break limit!',
	'Buy all buyinshop features','Reach 5 neutron boost power','Reach 10 neutron boost power','Reach 20 neutron boost power','Buy first neutron tier generator','Buy first neutron tier 2 generator','Buy first neutron tier 3 generator','Buy first neutron tier 5 generator','Buy first neutron tier 8 generator','Buy first neutron tier 10 generator']
storyMessages=['The breakfast is ready!','Sorry but this breakfast is belong to yo- oh wait.','Our home got invaded by aliens! Oh no, we need to do something!','Quick, put on your clothes and let go with your parents!','Phew, that was close. We are going to the planet who invaded us.','We made it to the airport, let fly around to the rocket!','And we here are. I could control the rocket if I was the owner.','This is it, get your spacesuit on.','Blast off! We are going to the planet that invaded us!','Oooo, stars are shiny. Wait a minute... whenever I see, I see too many stars. Who did this?',
	'The person that generators stars must be the god of stellar.','Oh no! All of our favorite stars are gone! What should I do now?!','Wait a minute, this guy reproduces everything! He must be fantastic for remaking our favorite stars too!','Get ready... we are now raiding somewhere that invaded us!']
achList={names:['Speedrunner','I don\'t need those','What are you doing?'],
	requirements:['Supernova in 30 seconds without headstarts','Supernova in 4 minutes but no autobuyers, hotkeys, and max all','Buy 40 tier 1 generators without having transfer upgrades nor prestige power']}
explainList={stars:'<b>Stars</b><br>Stars is your main currency and is a currency part of the game. You could buy generators by spending this!',gens:'<b>Generators</b><br>Generators is a production part of this game. There are 10 tiers in this game, each tier will produces the previous tier but the first tier would produces stars.<br>When you buy one, the generator you bought will produce 5% faster multiplicatively.',prestige:'<b>Prestige</b><br>Prestige is a <i>soft</i> reset but you keep some of your features and content.<br>In this game, if you prestige right away, you will get a production multiplier bonus for all of the generators multiplicatively.',transfer:'<b>Transfer</b><br>Transfer is like prestige, but it resets all of your prestiges and give the player upgrades instead of production multiplier. The currency when you transfer is called transfer points, where you can spend upgrades with it.',
	tupg1:'<b>Transfer upgrade <span style="font-size:66.6%">#1</span></b><br>This upgrade would increase the production multiplier by 5% multiplicatively every time the amount reaches the powers of ten.',tupg2:'<b>Transfer upgrade <span style="font-size:66.6%">#2</span></b><br>This upgrade would increase the production multiplier for all generators as the time increases after you started the game.',tupg3:'<b>Transfer upgrade <span style="font-size:66.6%">#3</span></b><br>This upgrade would increase the production multiplier for all generators as the time increases after you transfered.',tupg4:'<b>Transfer upgrade <span style="font-size:66.6%">#4</span></b><br>This upgrade would increase the production multiplier for all generators as your prestige power peak is higher.',tupg5:'<b>Transfer upgrade <span style="font-size:66.6%">#5</span></b><br>This upgrade would increase the production multiplier for all generators as your transfer point peak is higher.',tupg6:'<b>Transfer upgrade <span style="font-size:66.6%">#6</span></b><br>This upgrade would increases the prestige power gain as log<sub>10</sub> of prestige power gain increases.',tupg7:'',
	tupg8:'<b>Transfer upgrade <span style="font-size:66.6%">#8</span></b><br>This upgrade will affects the price of tier 10 generators that buying increases the cost in lower rate.',tupg9:'<b>Transfer upgrade <span style="font-size:66.6%">#9</span></b><br>This <i>simple</i> upgrade doubles the prestige power gain.',tupg10:'<b>Transfer upgrade <span style="font-size:66.6%">#10</span></b><br>This upgrade will affects tier 10 generators that buying increases the production multiplier by 10% instead.',tupg11:'<b>Transfer upgrade <span style="font-size:66.6%">#11</span></b><br>This upgrade will increases the prestige power gain then decreases it slowly after you transfered.',tupg12:'<b>Transfer upgrade <span style="font-size:66.6%">#12</span></b><br>This upgrade will increases the production multiplier for all generators by 3x!',tupg13:'<b>Transfer upgrade <span style="font-size:66.6%">#13</span></b><br>You will unlock this upgrade after buying first 12 upgrades. Then this upgrade would increases prestige power gain as you gain more transfer points.',tupg14:'<b>Transfer upgrade <span style="font-size:66.6%">#14</span></b><br>You will unlock this upgrade after buying first 12 upgrades. Then this upgrade would increases transfer point gain as you have higher prestige power.',
	supernova:'<b>Supernova</b><br>After the first couple layers of reset, as I called them prestige and transfer; there is third layer of reset called supernova.<br>You need to reach Infinite stars to get your first supernova. Each time you supernova, you will get a single neutron stars which you can buy it for upgrades and more content.',snupg1:'<b>Supernova upgrade <span style="font-size:66.6%">#1</span></b><br>This upgrade would increases the production multiplier for all generators as you buy more generators.',snupg4:'<b>Supernova upgrade <span style="font-size:66.6%">#2</span></b><br>This upgrade would increases the production multiplier for all generators as you gain more stars from the total amount.',snupg5:'<b>Supernova upgrade <span style="font-size:66.6%">#3</span></b><br>This upgrade would increases the production multiplier for all generators then decreases it slowly after you supernova.',snupg6:'<b>Supernova upgrade <span style="font-size:66.6%">#4</span></b><br>This upgrade would increases the prestige power gain as you supernova many times.',
	snupg7:'<b>Supernova upgrade <span style="font-size:66.6%">#5</span></b><br>This upgrade would',snupg8:'<b>Supernova upgrade <span style="font-size:66.6%">#6</span></b><br>This upgrade would',snupg9:'<b>Supernova upgrade <span style="font-size:66.6%">#7</span></b><br>This upgrade would',snupg10:'<b>Supernova upgrade <span style="font-size:66.6%">#8</span></b><br>This upgrade would',
	snupg11:'<b>Supernova upgrade <span style="font-size:66.6%">#9</span></b><br>This upgrade would',snupg12:'<b>Supernova upgrade <span style="font-size:66.6%">#10</span></b><br>This upgrade would',snupg13:'<b>Supernova upgrade <span style="font-size:66.6%">#11</span></b><br>This upgrade would',snupg14:'<b>Supernova upgrade <span style="font-size:66.6%">#12</span></b><br>This upgrade would',
	snupg15:'<b>Supernova upgrade <span style="font-size:66.6%">#13</span></b><br>This upgrade would increases the production multiplier for all generators as you have more achievements.',snupg16:'<b>Supernova upgrade <span style="font-size:66.6%">#14</span></b><br>This upgrade would increases the production multiplier for tier 1 generator as you buy more tier 10 generators.',snupg2:'<b>Supernova upgrade <span style="font-size:66.6%">#15</span></b><br>This upgrade would start with all transfer upgrades bought.',snupg3:'<b>Supernova upgrade <span style="font-size:66.6%">#16</span></b><br>This upgrade would start with an increasing prestige power as your neutron stars increases.',
	autoupgrader:'<b>Autoupgrader</b><br>This autobuyer would automatically buy all transfer upgrades in order.',autotransfer:'<b>Autotransfer</b><br>This autobuyer would automatically transfer when TP gain reaches the amount times your transfer points or TP gain reached the another amount.',autoprestige:'<b>Autoprestige</b><br>This autobuyer would automatically prestige when PP gain reaches the amount times your prestige power.',autogenerator:'<b>Autogenerator</b><br>This autobuyer would automatically buy all generators.',autonova:'<b>Autonova</b><br>This autobuyer would automatically supernova when NS gain reaches the amount.',
	bisfeature1:'<b>Buyinshop feature <span style="font-size:66.6%">#1</span></b><br>This autobuyer feature allows autogenerator to buy multiple each tier per autobuyer interval.',bisfeature2:'<b>Buyinshop feature <span style="font-size:66.6%">#2</span></b><br>This autobuyer feature allows to change the order of autogenerator that wants to buy.',bisfeature3:'<b>Buyinshop feature <span style="font-size:66.6%">#3</span></b><br>This autobuyer feature allows to change the autoprestige multiplier (auto prestiges if prestige power gain reaches the multiplier times your prestige power)',bisfeature4:'<b>Buyinshop feature <span style="font-size:66.6%">#4</span></b><br>This autobuyer feature allows to change the autotransfer multiplier (auto transfer if transfer point gain reaches the multiplier times your transfer points)',bisfeature5:'<b>Buyinshop feature <span style="font-size:66.6%">#5</span></b><br>This autobuyer feature unlocks autotransfer in different way, which it waits for auto transfer when transfer point gain has been reached the value.',bisfeature6:'<b>Buyinshop feature <span style="font-size:66.6%">#6</span></b><br>This autobuyer feature unlocks autonova, which is a new kind for autobuyer to come.',
	nbPowers:'<b>Neutron boosts</b><br>Neutron boosts have some limited upgrades that increases the production multiplier for all generators except the last one. The first 3 upgrades will increases the production multiplier by the base, located before the exponents come; and you can spend it by either stars, transfer points, or neutron stars.<br>You can buy one of the upgrades up to 20 times (or 30 if you are buying with neutron stars instead), which is the maximum of these upgrade.<br>Beside neutron boosts, you can able to break limit for more stars! Horray!',nbBase:'<b>Neutron boosts <span style="font-size:66.6%">Base upgrade</span></b><br>This upgrade would increase the base, located at the value before the exponents, for more powerful neutron boosts. You can buy this upgrade up to 10 times, which is the maximum of this upgrade.',nbPPPower:'<b>Neutron boosts <span style="font-size:66.6%">PP power</span></b><br>This upgrade will increase the prestige power gain from neutron boosts at sublinear (x<sup>n</sup> for all n<1) rates. You can buy this upgrade up to 5 times, which is the maximum of this upgrade.',
	neutronTiers:'<b>Neutron tiers</b><br>Beside the normal generators, there is another group of generators which called neutron tiers. Instead, the first generator in this group will produces neutrons, which translated to reduces the cost for all other generators; and buying one will increases the production multiplier by 5x multiplicatively!',snupg17:'<b>Supernova upgrade <span style="font-size:66.6%">#17</span></b><br>This upgrade will multiply neutron tier 1 generator by 10x instead of 5x.',snupg18:'<b>Supernova upgrade <span style="font-size:66.6%">#18</span></b><br>This upgrade will increase the production multiplier for neutron tier 2 generator as you have more neutrons.',snupg19:'<b>Supernova upgrade <span style="font-size:66.6%">#19</span></b><br>This upgrade will increase the production multiplier for neutron tier 3 generator as you bought more neutron tier 8 generators.',snupg20:'<b>Supernova upgrade <span style="font-size:66.6%">#20</span></b><br>This upgrade will increase the production multiplier for neutron tier 4 generator as you gain more prestige power.',snupg21:'<b>Supernova upgrade <span style="font-size:66.6%">#21</span></b><br>This upgrade will increase the production multiplier for neutron tier 5 generator as...',
	snupg22:'<b>Supernova upgrade <span style="font-size:66.6%">#22</span></b><br>This upgrade will increase the production multiplier for neutron tier 6 generator as...',snupg23:'<b>Supernova upgrade <span style="font-size:66.6%">#23</span></b><br>This upgrade will increase the production multiplier for neutron tier 7 generator as...',snupg24:'<b>Supernova upgrade <span style="font-size:66.6%">#24</span></b><br>This upgrade will increase the production multiplier for neutron tier 8 generator as...',snupg25:'<b>Supernova upgrade <span style="font-size:66.6%">#25</span></b><br>This upgrade will increase the production multiplier for neutron tier 9 generator as...',snupg26:'<b>Supernova upgrade <span style="font-size:66.6%">#26</span></b><br>This upgrade will increase the production multiplier for neutron tier 10 generator as...',
	growthRate:'<b>Growth rate</b><br>Growth rate means you will get a percentage of the resource you will earn in a second.<br>For example, 12% growth rate means you will earn 12% of your resources after a second.'}
maxValueLog=Math.log10(Number.MAX_VALUE)
tupg6mult=new Decimal(1)
starsLimit=Number.MAX_VALUE
tooMuch=false
ppsSingles=[new Decimal(0)]
pps=[new Decimal(0)]
ppt=[new Decimal(0)]
	
tab='gen'
oldTab=tab
lastTab=tab
showTooMuch=false
showedTooMuch=false
showTooMuch2=false
showedTooMuch2=false
SNTab='upgrades'
oldSNTab=SNTab
genTab='tiers'
oldGenTab=genTab
achTab='nonBonus'
oldAchTab=achTab
oldLayout=player.layout

keysPressed=[]
notOnFocus=true
notOnShift=1

costs={tiers:[],tupgs:[1,1,1,1,2,8,20,50,100,250,300,500,750,3000],snupgs:[1,15,300,1,1,1,2,2,3,4,5,6,8,9,10,12,1e35,1e40,1e50,1e75,1e100,1e115,1e130,1e145,1e160,1e175],intReduceCost:1,bisfeatures:[3000,5000,7500,10000,1e5,1e6],bbCost:1000,neutronBoosts:[0,0,0,0,0],neutronTiers:[]}
gainRate=[0,0]
streqs=[200,3000,100000,1e16,1e200]
challreqs=[200,300,500,750,1000,1200,1500,1750,2000,2200,2500,2750]
neutronBoost=new Decimal(1)
neutronBoostPP=new Decimal(1)
neutronPower=new Decimal(1)
totalAliens=0
var gameLoopInterval
	
function updateElement(elementID,value) {
	document.getElementById(elementID).innerHTML=value
}
	
function updateClass(elementID,value) {
	document.getElementById(elementID).className=value
}
	
function moveElement(elementID,moveTo) {
	document.getElementById(moveTo).appendChild(document.getElementById(elementID))
}
	
function showElement(elementID,style) {
	document.getElementById(elementID).style.display=style
}
	
function hideElement(elementID) {
	document.getElementById(elementID).style.display='none'
}
	
function visibleElement(elementID) {
	document.getElementById(elementID).style.visibility='visible'
}
	
function invisibleElement(elementID) {
	document.getElementById(elementID).style.visibility='hidden'
}

function onFocus() {
	notOnFocus=false
}

function onUnfocus() {
	notOnFocus=true
}

function switchLayout() {
	player.layout=player.layout%2+1
}

function format(number,decimalPoints=2,offset=0,rounded=true) {
	number = new Decimal(number)
	var precision=decimalPoints+offset*3
	if (Number.isNaN(number.mantissa)) return 'NaN'
	if (number.lte(Number.NEGATIVE_INFINITY)) return '-Infinite'
	if (number.gte(Number.POSITIVE_INFINITY)) return 'Infinite'
	if (number.lt(Math.pow(1000,offset+1))) {
		return number.toFixed(rounded?0:Math.min(Math.max(decimalPoints-number.exponent,0),decimalPoints))
	}
	if (player.notation=='Standard') {
		var abbid=Decimal.div(number.exponent,3).floor().sub(offset)
		var remainder=BigInteger.remainder(number.exponent,3)
		if (Decimal.lt(abbid,9007199254740992/3)) return (number.mantissa*Math.pow(10,remainder+offset*3)).toFixed(Math.max(decimalPoints-remainder,0))+abbreviation(Math.floor(number.exponent/3-1-offset))
		return (number.mantissa*Math.pow(10,remainder+offset*3)).toFixed(Math.max(decimalPoints-remainder,0))+abbreviation(Decimal.sub(abbid,1))
	} else if (player.notation=='Letters') {
		var abbid=Decimal.div(number.exponent,3).floor().sub(offset)
		var remainder=BigInteger.remainder(number.exponent,3)
		if (Decimal.lt(abbid,9007199254740992/3)) return (number.mantissa*Math.pow(10,remainder+offset*3)).toFixed(Math.max(decimalPoints-remainder,0))+letter(Math.floor(number.exponent/3-offset))
		return (number.mantissa*Math.pow(10,remainder+offset*3)).toFixed(Math.max(decimalPoints-remainder,0))+letter(abbid)
	} else if (player.notation=='Scientific') {
		if (Decimal.gt(number.exponent,99999+3*offset)) {
			var exponent=new Decimal(number.exponent).sub(offset*3)
			return (number.mantissa*Math.pow(10,offset*3)).toFixed(decimalPoints)+'e'+exponent.mantissa.toFixed(2)+'e'+exponent.exponent
		}
		return (number.mantissa*Math.pow(10,offset*3)).toFixed(decimalPoints)+'e'+(number.exponent-offset*3)
	} else if (player.notation=='Engineering') {
		var remainder=BigInteger.remainder(number.exponent,3)
		if (Decimal.gt(number.exponent,100001+3*offset)) {
			var exponent=Decimal.div(number.exponent,3).sub(offset*3).floor().times(3)
			var abbid2=BigInteger.divide(exponent.exponent,3)
			var remainder2=BigInteger.remainder(exponent.exponent,3)
			return (number.mantissa*Math.pow(10,remainder+offset*3)).toFixed(Math.max(decimalPoints-remainder,0))+'e'+(exponent.mantissa*Math.pow(10,remainder2)).toFixed(2-remainder2)+'e'+abbid2*3
		}
		var abbid=BigInteger.divide(number.exponent,3)-offset
		return (number.mantissa*Math.pow(10,remainder+offset*3)).toFixed(Math.max(decimalPoints-remainder,0))+'e'+BigInteger.multiply(abbid,3)
	} else if (player.notation=='Logarithm') {
		if (Decimal.gt(number.exponent,99999)) {
			return 'ee'+Decimal.log10(number.log10()).toFixed(decimalPoints)
		}
		return 'e'+number.log10().toFixed(decimalPoints)
	} else if (player.notation=='Natural logarithm') {
		var log=Decimal.times(number.log10(),2.30258509)
		if (Decimal.gte(log,1e5)) {
			log=log.log10()*2.30258509
			return 'e<sup>e^'+log.toFixed(decimalPoints)+'</sup>'
		}
		return 'e^'+log.toFixed(decimalPoints)
	} else if (player.notation=='Repoalphabet') {
		var abbid=BigInteger.subtract(BigInteger.divide(number.exponent,3),offset)
		var remainder=BigInteger.remainder(number.exponent,3)
		return (number.mantissa*Math.pow(10,remainder+offset*3)).toFixed(Math.max(decimalPoints-remainder,0))+sameletter(abbid)
	} else if (player.notation=='Hyper-E') {
		if (Decimal.gt(number.exponent,99999)) {
			var exponent=new Decimal(number.exponent)
			return exponent.mantissa.toFixed(2)+'E'+exponent.exponent+'#2'
		}
		return (number.mantissa*Math.pow(10,offset*3)).toFixed(decimalPoints)+'e'+(number.exponent-offset*3)
	} else if (player.notation=='Original') {
		var abbid=Decimal.div(number.exponent,3).floor().sub(offset)
		var remainder=BigInteger.remainder(number.exponent,3)
		if (Decimal.lt(abbid,9007199254740992/3)) {
			if (number.exponent>305) return (number.mantissa*Math.pow(10,remainder+offset*3)).toFixed(Math.max(decimalPoints-remainder,0))+letter(Math.floor(number.exponent/3)-offset)
			return (number.mantissa*Math.pow(10,remainder+offset*3)).toFixed(Math.max(decimalPoints-remainder,0))+abbreviation(Math.floor(number.exponent/3)-1-offset)
		}
		return (number.mantissa*Math.pow(10,remainder+offset*3)).toFixed(Math.max(decimalPoints-remainder,0))+letter(abbid)
	} else if (player.notation=='Hybrid') {
		var abbid=Decimal.div(number.exponent,3).floor().sub(offset)
		var remainder=BigInteger.remainder(number.exponent,3)
		if (Decimal.lt(abbid,9007199254740992/3)) {
			if (number.exponent>14) return (number.mantissa*Math.pow(10,remainder+offset*3)).toFixed(Math.max(decimalPoints-remainder,0))+letter(Math.floor(number.exponent/3)+23-offset)
			return (number.mantissa*Math.pow(10,remainder+offset*3)).toFixed(Math.max(decimalPoints-remainder,0))+abbreviation(Math.floor(number.exponent/3)-1-offset)
		}
		return (number.mantissa*Math.pow(10,remainder+offset*3)).toFixed(Math.max(decimalPoints-remainder,0))+letter(abbid.add(23))
	} else if (player.notation=='Infinity') {
		var log=Decimal.div(number.log10(Number.E),maxValueLog)
		if (Decimal.gte(log,1e5)) {
			log=log.log10(Number.E)/maxValueLog
			return 'Inf<sup>Inf^'+log.toFixed(decimalPoints)+'</sup>'
		}
		return 'Infinite^'+log.toFixed(decimalPoints)
	} else if (player.notation=='Square exponent') {
		var srlog=Decimal.sqrt(number.log10())
		if (Decimal.gte(srlog,1e5)) {
			srlog=Decimal.sqrt(srlog.log10())
			return 'e(e'+srlog.toFixed(decimalPoints)+'^2)^2'
		}
		return 'e'+srlog.toFixed(decimalPoints)+'^2'
	} else if (player.notation=='Polynominal exponent') {
		var dlog=Decimal.log10(number.log10())/Math.log10(maxValueLog)
		return '10<sup>log10(Inf)^'+dlog.toFixed(decimalPoints)+'</sup>'
	} else if (player.notation=='Color') {
		var abbid=Decimal.div(number.exponent,3).floor().sub(offset)
		var remainder=BigInteger.remainder(number.exponent,3)
		if (Decimal.lt(abbid,9007199254740992/3)) return (number.mantissa*Math.pow(10,remainder+offset*3)).toFixed(Math.max(decimalPoints-remainder,0))+getColor(Math.floor(number.exponent/3)-offset)
		return (number.mantissa*Math.pow(10,remainder+offset*3)).toFixed(Math.max(decimalPoints-remainder,0))+getColor(abbid)
	} else if (player.notation=='Megacolor') {
		var abbid=Decimal.div(number.exponent,3).floor().sub(offset)
		var remainder=BigInteger.remainder(number.exponent,3)
		if (Decimal.lt(abbid,9007199254740992/3)) return (number.mantissa*Math.pow(10,remainder+offset*3)).toFixed(Math.max(decimalPoints-remainder,0))+getMegacolor(Math.floor(number.exponent/3)-offset)
		return (number.mantissa*Math.pow(10,remainder+offset*3)).toFixed(Math.max(decimalPoints-remainder,0))+getMegacolor(abbid)
	} else if (player.notation=='Progress') {
		var abbid=Decimal.div(number.exponent,3).floor().sub(offset)
		var remainder=BigInteger.remainder(number.exponent,3)
		if (Decimal.lt(abbid,9007199254740992/3)) return (number.mantissa*Math.pow(10,remainder+offset*3)).toFixed(Math.max(decimalPoints-remainder,0))+getProgress(Math.floor(number.exponent/3)-offset)
		return (number.mantissa*Math.pow(10,remainder+offset*3)).toFixed(Math.max(decimalPoints-remainder,0))+getProgress(abbid)
	} else {
		return '?'
	}
}

function formatTime(s) {
	if (s < 1) {
		return Math.floor(s*1000)+' milliseconds'
	} else if (s < 60) {
		return Math.floor(s*100)/100+' seconds'
	} else if (s < 3600) {
		return Math.floor(s/60)+' minutes and '+Math.floor(s%60)+' seconds'
	} else if (s < 86400) {
		return Math.floor(s/3600)+' hours, '+Math.floor(s/60%60)+' minutes, and '+Math.floor(s%60)+' seconds'
	} else if (s < 2629746) {
		return Math.floor(s/86400)+' days, '+Math.floor(s/3600%24)+' hours, '+Math.floor(s/60%60)+' minutes, and '+Math.floor(s%60)+' seconds'
	} else if (s < 31556952) {
		return Math.floor(s/2629746)+' months, '+Math.floor(s%2629746/86400)+' days, '+Math.floor(s%2629746/3600%24)+' hours, '+Math.floor(s%2629746/60%60)+' minutes, and '+Math.floor(s%2629746%60)+' seconds'
	} else if (s < Infinity) {
		return format(Math.floor(s/31556952))+' years, '+Math.floor(s/2629746%12)+' months, '+Math.floor(s%2629746/86400)+' days, '+Math.floor(s%2629746/3600%24)+' hours, '+Math.floor(s%2629746/60%60)+' minutes, and '+Math.floor(s%2629746%60)+' seconds'
	} else {
		return 'Infinite'
	}
}

function formatCosts(number) {
	if (number.gte(starsLimit)) {
		return 'Infinite'
	} else if (number.lt(1)) {
		var first=number.mantissa.toFixed(1)+'/'
		var exponent=BigInteger.negate(number.exponent)
		if (Decimal.lt(exponent,3)) return first+Math.pow(10,exponent)
		if (player.notation=='Standard') {
			var abbid=Decimal.div(exponent,3).floor()
			var remainder=BigInteger.remainder(exponent,3)
			if (Decimal.lt(abbid,9007199254740992/3)) return first+Math.pow(10,remainder)+abbreviation(Math.floor(exponent/3)-1)
			return first+Math.pow(10,remainder)+abbreviation(Decimal.sub(abbid,1))
		} else if (player.notation=='Letters') {
			var abbid=Decimal.div(exponent,3).floor()
			var remainder=BigInteger.remainder(exponent,3)
			if (Decimal.lt(abbid,9007199254740992/3)) return first+Math.pow(10,remainder)+letter(Math.floor(exponent/3))
			return first+Math.pow(10,remainder)+letter(abbid)
		} else if (player.notation=='Scientific') {
			if (Decimal.gt(exponent,99999)) {
				var exponent=new Decimal(exponent)
				return first+'1e'+exponent.mantissa.toFixed(2)+'e'+exponent.exponent
			}
			return first+'1e'+exponent
		} else if (player.notation=='Engineering') {
			var remainder=BigInteger.remainder(exponent,3)
			if (Decimal.gt(exponent,100001)) {
				var exponent=Decimal.div(exponent,3).floor().times(3)
				var abbid2=BigInteger.divide(exponent.exponent,3)
				var remainder2=BigInteger.remainder(exponent.exponent,3)
				return first+Math.pow(10,remainder)+'e'+(exponent.mantissa*Math.pow(10,remainder2)).toFixed(2-remainder2)+'e'+abbid2*3
			}
			var abbid=BigInteger.divide(exponent,3)
			return first+Math.pow(10,remainder)+'e'+BigInteger.multiply(abbid,3)
		} else if (player.notation=='Logarithm') {
			if (Decimal.gt(exponent,99999)) {
				return first+'ee'+Decimal.log10(exponent).toFixed(2)
			}
			return first+'e'+exponent
		} else if (player.notation=='Natural logarithm') {
			var log=Decimal.times(exponent,2.30258509)
			if (Decimal.gte(log,1e5)) {
				log=log.log10()*2.30258509
				return first+'e<sup>e^'+log.toFixed(decimalPoints)+'</sup>'
			}
			return first+'e^'+log.toFixed(decimalPoints)
		} else if (player.notation=='Repoalphabet') {
			var abbid=BigInteger.divide(exponent,3)
			var remainder=BigInteger.remainder(exponent,3)
			return first+Math.pow(10,remainder)+sameletter(abbid)
		} else if (player.notation=='Hyper-E') {
			if (Decimal.gt(exponent,99999)) {
				var exponent=new Decimal(exponent)
				return first+exponent.mantissa.toFixed(2)+'E'+exponent.exponent+'#2'
			}
			return first+'1e'+exponent
		} else if (player.notation=='Original') {
			var abbid=Decimal.div(exponent,3).floor()
			var remainder=BigInteger.remainder(exponent,3)
			if (Decimal.lt(abbid,9007199254740992/3)) {
				if (exponent>305) return first+Math.pow(10,remainder)+letter(Math.floor(exponent/3))
				return first+Math.pow(10,remainder)+abbreviation(Math.floor(exponent/3)-1)
			}
			return first+Math.pow(10,remainder)+letter(abbid)
		} else if (player.notation=='Hybrid') {
			var abbid=Decimal.div(exponent,3).floor()
			var remainder=BigInteger.remainder(exponent,3)
			if (Decimal.lt(abbid,9007199254740992/3)) {
				if (exponent>14) return first+Math.pow(10,remainder)+letter(Math.floor(exponent/3)+23)
				return first+Math.pow(10,remainder)+abbreviation(Math.floor(exponent/3)-1)
			}
			return first+Math.pow(10,remainder)+letter(abbid.add(23))
		} else if (player.notation=='Infinity') {
			var log=Decimal.div(exponent,maxValueLog)
			if (Decimal.gte(log,1e5)) {
				log=log.log10(Number.E)/maxValueLog
				return first+'Inf<sup>Inf^'+log.toFixed(2)+'</sup>'
			}
			return first+'Infinite^'+log.toFixed(2)
		} else if (player.notation=='Square exponent') {
			var srlog=Decimal.sqrt(exponent)
			if (Decimal.gte(srlog,1e5)) {
				srlog=Decimal.sqrt(srlog.log10())
				return first+'e(e'+srlog.toFixed(2)+'^2)^2'
			}
			return first+'e'+srlog.toFixed(2)+'^2'
		} else if (player.notation=='Polynominal exponent') {
			var dlog=Decimal.log10(exponent)/Math.log10(maxValueLog)
			return first+'10<sup>log10(Inf)^'+dlog.toFixed(2)+'</sup>'
		} else if (player.notation=='Color') {
			var abbid=Decimal.div(exponent,3).floor()
			var remainder=BigInteger.remainder(exponent,3)
			if (Decimal.lt(abbid,9007199254740992/3)) return first+Math.pow(10,remainder)+getColor(Math.floor(exponent/3))
			return first+Math.pow(10,remainder)+getColor(abbid)
		} else if (player.notation=='Megacolor') {
			var abbid=Decimal.div(exponent,3).floor()
			var remainder=BigInteger.remainder(exponent,3)
			if (Decimal.lt(abbid,9007199254740992/3)) return first+Math.pow(10,remainder)+getMegacolor(Math.floor(exponent/3))
			return first+Math.pow(10,remainder)+getMegacolor(abbid)
		} else if (player.notation=='Progress') {
			var abbid=Decimal.div(exponent,3).floor()
			var remainder=BigInteger.remainder(exponent,3)
			if (Decimal.lt(abbid,9007199254740992/3)) return first+Math.pow(10,remainder)+getProgress(Math.floor(exponent/3))
			return first+Math.pow(10,remainder)+getProgress(abbid)
		} else {
			return first+'?'
		}
	} else if (number.lt(10)) {
		return number.toFixed(1)
	} else {
		return format(number)
	}
}

function formatNSCosts(number) {
	number=new Decimal(number)
	if (number.gte(Number.MAX_VALUE)&&!player.cheatOptions.breakLimitNS) {
		return 'Infinite'
	} else {
		return format(number)+' NS'
	}
}

function abbreviation(label) {
	var haListU=['','U','D','T','Q','Qi','S','Sp','O','N']
	var haListT=['','D','V','T','Q','Qi','S','Sp','O','N']
	var haListH=['','C','Dn','Tn','Qn','Qin','Sn','Spn','On','Nn']
	step=0
	if (typeof(label)!='number'||Decimal.gte(label,1e12)) {
		step=Math.floor(Decimal.log(label,1000)-3)
		label=Math.floor(Decimal.div(label,Decimal.pow(1000,step)).toNumber())
	}
	abb=''
	abbFull=(step==0)?'':'<span style="font-size:75%">...(+'+step+')</span>'
	
	if (label==0) {
		return 'k'
	}
	if (label==1) {
		return 'M'
	}
	do {
		var u=Math.floor(label)%10
		var t=Math.floor(label/10)%10
		var h=Math.floor(label/100)%10
		abb=''
		
		if (u>0&&!(u==1&&t==0&&h==0&&step>0)) {
			if (u==2&&t==0) {
				abb='B'
			} else {
				abb=haListU[u]
			}
		}
		if (t>0) {
			abb=abb+haListT[t]
			if (u==0&&t>1) {
				abb=abb+'g'
			}
		}
		if (h>0) {
			abb=abb+haListH[h]
		}
		highAbb=abbreviation2(step)
		if (u>0||t>0||h>0) {
			if (abbFull=='') {
				abbFull=abb+highAbb+abbFull
			} else {
				abbFull=abb+highAbb+'-'+abbFull
			}
		}
		label=label/1000
		step++
	} while (label>0)
	
	return abbFull
}

function abbreviation2(step) {
	var haListB = ['','MI','MC','NA','PC','FM','AT','ZP','YC','XN','WC','VN','UA']
	var haListS = ['','u','d','t','q','p','x','h','o','n',
	'da','ud','dd','td','qd','pd','xd','hd','od','nd',
	'vg','uc','dv','tc','qv','pc','xc','hc','oc','nc',
	'ta','ut','dt','tt','qt','pt','xt','ht','ot','nt',
	'sa','us','ds','ts','qs','ps','xs','hs','os','ns',
	'pa','up','dp','tp','qp','pp','xp','hp','op','np',
	'xa','ux','dx','tx','qx','px','xx','hx','ox','nx',
	'ha','uh','dh','th','qh','ph','xh','hh','oh','nh',
	'oa','uo','do','to','qo','po','xo','ho','oo','no',
	'na','un','dn','tn','qn','pn','xn','hn','on','nn']
	abb2=haListS[step%100]
	var ha=''
	
	if (step==0) {
		return ''
	}
	if (haListB[step]) {
		return haListB[step]
	}
	if (step>99) {
		if (step<200) {
			ha = 'c'
		} else {
			ha = haListS[Math.floor(step/100)%100]
			var ha2=''
			if (step>9999) {
				if (step<20000) {
					ha2 = 'c'
				} else {
					ha2 = haListS[Math.floor(step/10000)]
				}
				if (step%10000<1000) {
					ha2 = 'e'+ha2
				}
			}
			ha = ha+ha2
		}
		if (step%100<10) {
			ha = 'e'+ha
		}
	}
	return abb2+ha
}

function letter(label) {
	var letters='abcdefghijklmnopqrstuvwxyz'
	var result=''
	if (typeof(label)!='number'||Decimal.gte(label,1e14)) {
		skip=Math.max(Math.floor(Decimal.times(label,25).add(1).log(26))-10,0)
		if (skip>0) {
			label=Decimal.div(label,Decimal.pow(26,skip)).sub(26/25).toNumber()
			result='<span style="font-size:75%">...(+'+skip+')</span>'
		}
	}
	do {
		var id=(label-1)%26
		result=letters.slice(id,id+1)+result
		label=Math.floor((label-1)/26)
	} while (label>0)
	return result
}

function sameletter(label) {
	var letters='abcdefghijklmnopqrstuvwxyz'
	var result=''
	var id=BigInteger.remainder(BigInteger.subtract(label,1),26)
	result=letters.slice(id,id+1)
	var length=BigInteger.divide(BigInteger.add(label,25),26)
	if (length>5) {
		result=result+'<span style="font-size:75%">'+format(length,2,1)+'</span>'
	} else {
		result=result.repeat(length)
	}
	return result
}

function getColor(label) {		
	var colors=[[0.9,0,0],[0,0.9,0],[0,0,0.9],[0.9,0.9,0],[0,0.9,0.9],[0.9,0,0.9],[0.45,0.45,0.45],[0.9,0.9,0.9],[0.1,0.1,0.1],[0.9,0.45,0]]		
	var result=''
	if (typeof(label)!='number'||Decimal.gte(label,1e14)) {
		skip=Math.max(Math.floor(Decimal.times(label,29).add(1).log(30))-10,0)
		console.log(Math.floor(Decimal.times(label,29).add(1).log(30))-10)
		if (skip>0) {
			label=Decimal.div(label,Decimal.pow(30,skip)).sub(30/29).toNumber()
			result='<span style="font-size:75%">...(+'+skip+')</span>'
		}
	}
	do {
		var id=(label-1)%30
		var colorid=Math.floor(id/3)%10		
		var fade=(id/3)%1		
		var red=Math.floor((colors[(colorid+1)%10][0]*fade+colors[colorid%10][0]*(1-fade))*255)		
		var green=Math.floor((colors[(colorid+1)%10][1]*fade+colors[colorid%10][1]*(1-fade))*255)		
		var blue=Math.floor((colors[(colorid+1)%10][2]*fade+colors[colorid%10][2]*(1-fade))*255)		
		result='<span style="width:1em;height:1em;font-size:50%;background-color:rgb('+red+','+green+','+blue+');display:inline-block"></span>'+result
		label=Math.floor((label-1)/30)
	} while (label>0)
	return result
}

function getMegacolor(label) {	
	var result=''
	if (typeof(label)!='number'||Decimal.gte(label,1e14)) {
		skip=Math.max(Math.floor(Decimal.times(label,16777215).add(1).log(16777216))-1,0)
		console.log(Math.floor(Decimal.times(label,16777215).add(1).log(16777216))-1)
		if (skip>0) {
			label=Decimal.div(label,Decimal.pow(16777216,skip)).sub(16777216/16777215).toNumber()
			result='<span style="font-size:75%">...(+'+skip+')</span>'
		}
	}
	do {
		var id=(label-1)%16777216
		result='<span style="width:1em;height:1em;font-size:50%;background-color:rgb('+(Math.floor(id/65536)%256)+','+(Math.floor(id/256)%256)+','+(id%256)+');display:inline-block"></span>'+result
		label=Math.floor((label-1)/16777216)
	} while (label>0)
	return result	
}

function getProgressColor(label) {
	var colors=[[0.9,0,0],[0,0.9,0],[0,0,0.9],[0.9,0.9,0],[0,0.9,0.9],[0.9,0,0.9],[0.45,0.45,0.45],[0.9,0.9,0.9],[0.1,0.1,0.1],[0.9,0.45,0]]		
	var colorid=label%10
	var fade=(Math.floor(label/10)/3+Math.floor(label/30)/2+Math.floor(label/60)/5+Math.floor(label/300)/7+Math.floor(label/2100)/11+Math.floor(label/23100)/13)%1
	var red=Math.floor((colors[(colorid+1)%10][0]*fade+colors[colorid%10][0]*(1-fade))*255)		
	var green=Math.floor((colors[(colorid+1)%10][1]*fade+colors[colorid%10][1]*(1-fade))*255)		
	var blue=Math.floor((colors[(colorid+1)%10][2]*fade+colors[colorid%10][2]*(1-fade))*255)		
	return 'rgb('+red+','+green+','+blue+')'
}

function getProgress(label) {
	var labellog=Math.max(Math.floor(Decimal.log(label,maxValueLog))-6,0)
	var boxes=''
	for (i=6;i>=0;i--) {
		boxes='<span style="position:absolute;width:'+Decimal.div(label,Decimal.pow(maxValueLog,labellog+i)).toNumber()*3%maxValueLog%1*100+'%;height:100%;background-color:'+getProgressColor(labellog+i)+';display:inline-block"></span>'+boxes
	}
	return '<span style="position:relative;text-align:left;width:4em;height:1em;font-size:50%;background-color:#e50000;display:inline-block">'+boxes+'</span>'
}

function switchNotation() {
	if (player.notation=='Standard') {
		player.notation='Letters'
	} else if (player.notation=='Letters') {
		player.notation='Scientific'
	} else if (player.notation=='Scientific') {
		player.notation='Engineering'
	} else if (player.notation=='Engineering') {
		player.notation='Logarithm'
	} else if (player.notation=='Logarithm') {
		player.notation='Natural logarithm'
	} else if (player.notation=='Natural logarithm') {
		player.notation='Repoalphabet'
	} else if (player.notation=='Repoalphabet') {
		player.notation='Hyper-E'
	} else if (player.notation=='Hyper-E') {
		player.notation='Original'
	} else if (player.notation=='Original') {
		player.notation='Hybrid'
	} else if (player.notation=='Hybrid'&&keysPressed.includes(16)) {
		player.notation='Infinity'
	} else if (player.notation=='Infinity') {
		player.notation='Square exponent'
	} else if (player.notation=='Square exponent') {
		player.notation='Polynominal exponent'
	} else if (player.notation=='Polynominal exponent') {
		player.notation='Color'
	} else if (player.notation=='Color') {
		player.notation='Megacolor'
	} else if (player.notation=='Megacolor') {
		player.notation='Progress'
	} else {
		player.notation='Standard'
	} 
	updateMilestones()
}

function save() {
	try {
		if (oldDesign) {
			localStorage.setItem('save',btoa(JSON.stringify(player)))
		} else {
			localStorage.setItem('save2',btoa(JSON.stringify(player)))
		}
		console.log('Game saved!')
		lastSave=new Date().getTime()/1000
	
		var saveNotice=document.getElementById('saveNotice')
		saveNotice.style.opacity=1
		
		if (snHide) clearTimeout(snHide)
		var snHide=setTimeout(function(){saveNotice.style.opacity=0;},6000)
	} catch (e) {
		console.log('Well, we tried.')
		console.error(e)
	}
}

function load(save) {
	clearInterval(gameLoopInterval)
	try {
		var savefile=JSON.parse(atob(save))
		
		if (savefile.playTime) {
			savefile.playtime=savefile.playTime
			delete savefile.playTime
		}
		if (!savefile.playtime) savefile.playtime=0
		if (!savefile.achievements) savefile.achievements=[]
		if (savefile.scientific!=undefined) {
			savefile.notation=(savefile.scientific)?'Scientific':'Standard'
			delete savefile.scientific	
		}
		if (!savefile.notation) savefile.notation='Standard'
		if (!savefile.stars) savefile.stars=10
		if (!savefile.totalStars) savefile.totalStars=savefile.stars
		if (!savefile.prestigePower) savefile.prestigePower=1
		if (!savefile.transferPlaytime) savefile.transferPlaytime=savefile.playtime
		if (!savefile.transferPoints) savefile.transferPoints=0
		if (savefile.version==undefined) {
			savefile.prestigePeak[2]=0
			savefile.highestTierTransfer=0
			savefile.neutronStars=0
			savefile.supernovaPlaytime=savefile.playtime
			savefile.fastestSupernova=Number.MAX_VALUE
			savefile.lastTransferPlaytime=0
			savefile.supernovaUpgrades=[]
			savefile.supernovaTabsUnlocked=0
			savefile.version=0.6
		}
		if (savefile.build==undefined&&savefile.beta==undefined) {
			var tempVersion=savefile.version
			savefile.version=0.6
			
			if (tempVersion<0.6001) {
				savefile.challengesUnlocked=0
				savefile.challengesCompleted=[]
				savefile.autobuyers=[]
				savefile.neutrons=new Decimal(0)
				savefile.neutronTiers={t1:{amount:new Decimal(0),bought:0},
				t2:{amount:new Decimal(0),bought:0},
				t3:{amount:new Decimal(0),bought:0},
				t4:{amount:new Decimal(0),bought:0},
				t5:{amount:new Decimal(0),bought:0},
				t6:{amount:new Decimal(0),bought:0},
				t7:{amount:new Decimal(0),bought:0},
				t8:{amount:new Decimal(0),bought:0},
				t9:{amount:new Decimal(0),bought:0},
				t10:0}
			}
			if (tempVersion<0.6002) {
				savefile.currentChallenge=0
			}
			if (tempVersion<0.6003) {
				savefile.prestiges[3]=0
				savefile.prestiges[4]=0
				savefile.prestigePeak[3]=0
				savefile.prestigePeak[4]=0
				savefile.quarkStars=0
				savefile.particles=0
			}
			if (tempVersion<0.6004) {
				savefile.stars=savefile.points
				var temp = []
				for (i=1;i<10;i++) {
					temp.push(savefile.generators['t'+i])
				}
				temp.push({amount:savefile.generators.t10,bought:savefile.generators.t10})
				savefile.generators=temp
				
				delete savefile.points
			}
			if (tempVersion<0.6005) {
				savefile.playtime=savefile.playtime/1000
				savefile.totalStars=savefile.totalPoints
				savefile.transferPlaytime=savefile.transferPlaytime/1000
				savefile.transferPoints=savefile.prestigePoints
				savefile.transferUpgrades=savefile.prestigeUpgrades
				savefile.layout=1
				
				delete savefile.totalPoints
				delete savefile.prestigePoints
				delete savefile.prestigeUpgrades
			}
			if (tempVersion<0.6006) {
				savefile.supernovaPlaytime=savefile.supernovaPlaytime/1000
				savefile.fastestSupernova=savefile.fastestSupernova/1000
				
				var temp = []
				for (i=1;i<10;i++) {
					temp.push(savefile.neutronTiers['t'+i])
				}
				temp.push({amount:savefile.neutronTiers.t10,bought:savefile.neutronTiers.t10})
				savefile.neutronTiers=temp
				
				savefile.aliens={unlocked:false,amount:0,interval:0,chance:0}
			}
			if (tempVersion<0.6007) {
				var newAchievements=[]
				for (i in savefile.achievements) {
					if (savefile.achievements[i]==12) {
						newAchievements.push(13)
					} else if (savefile.achievements[i]==13) {
						newAchievements.push(12)
					} else {
						newAchievements.push(savefile.achievements[i])
					}
				}
				savefile.achievements=newAchievements
				savefile.highestTierPrestiges=[0,savefile.highestTransferTier,0]
				
				delete savefile.highestTransferTier
			}
			if (tempVersion<0.6008) {
				var oldCC=savefile.challengesCompleted
				savefile.challengesCompleted={}
				for (i in oldCC) {
					if (oldCC[parseInt(i)]!=undefined) {
						if (oldCC[parseInt(i)]>0) savefile.challengesCompleted[parseInt(i)]=oldCC[parseInt(i)]
					}
				}
			}
			if (tempVersion<0.6009) {
				savefile.chall8pow=1
				delete savefile.challengesUnlocked
			}
			if (tempVersion<0.601) {
				savefile.showProgress=false
			}
			if (tempVersion<0.6011) {
				savefile.challPow=savefile.chall8pow
				
				delete savefile.chall8pow
			}
			if (tempVersion<0.6012) {
				savefile.challConfirm=true
			}
			savefile.build=0
		}
		if (savefile.version<=0.6) {
			if (savefile.build<14) {
				savefile.lightTheme=false
			}
			if (savefile.build<15) {
				if (savefile.prestiges[2]==undefined) savefile.prestiges[2]=0
			}
			savefile.build=0
		}
		if (savefile.version<=0.65) {
			if (savefile.build<1) {
				savefile.autobuyers={}
				if (savefile.prestiges[2]>0||amountChallengeCompleted()>0) savefile.autobuyers.interval=10
				if (savefile.prestiges[2]>0) savefile.autobuyers.upgrade={lastTick:savefile.playtime+(new Date().getTime()-savefile.lastUpdate)/1000}
				if (savefile.challengesCompleted[1]?savefile.challengesCompleted[1]>0:false) savefile.autobuyers.transfer={lastTick:savefile.playtime+(new Date().getTime()-savefile.lastUpdate)/1000}
				if (savefile.challengesCompleted[2]?savefile.challengesCompleted[2]>0:false) savefile.autobuyers.prestige={lastTick:savefile.playtime+(new Date().getTime()-savefile.lastUpdate)/1000}
				for (i=3;i<13;i++) {
					if (savefile.challengesCompleted[i]?savefile.challengesCompleted[i]>0:false) {
						if (savefile.autobuyers.gens==undefined) {
							savefile.autobuyers.gens={lastTick:savefile.playtime+(new Date().getTime()-savefile.lastUpdate)/1000,tiers:{}}
						}
						savefile.autobuyers.gens.tiers[13-i]=true
					}
				}
			}
			if (savefile.build<2) {
				if (savefile.autobuyers.upgrade!=undefined) savefile.autobuyers.upgrade.disabled=false
				if (savefile.autobuyers.transfer!=undefined) {
					savefile.autobuyers.transfer.times=2
					savefile.autobuyers.transfer.disabled=false
				}
				if (savefile.autobuyers.prestige!=undefined) {
					savefile.autobuyers.prestige.times=3
					savefile.autobuyers.prestige.disabled=false
				}
				if (savefile.autobuyers.gens!=undefined) savefile.autobuyers.gens.bulk=1
			}
			if (savefile.build<3) {
				savefile.lastSupernovas=[]
				savefile.buyinshopFeatures=[]
				savefile.autobuyerPriorities=[1,2,3,4,5,6,7,8,9,10]
			}
			if (savefile.build<4) {
				savefile.strings=0
				savefile.prestiges[5]=0
				savefile.prestigePeak[5]=0
				savefile.highestTierPrestiges[3]=0
				savefile.highestTierPrestiges[4]=0
				savefile.highestTierPrestiges[5]=0
				savefile.breakLimit=(savefile.neutronTiers.bought>0)
			}
			if (savefile.build<5) {
				savefile.story=0
				savefile.neutronBoosts={basePower:1,powers:[0,0,0],ppPower:0}
			}
			if (savefile.build<6) {
				savefile.neutronBoosts.basePower=10
			}
			if (savefile.build<7) {
				if (savefile.neutronBoosts.ppPower>0.05) savefile.neutronBoosts.ppPower=0.05
			}
			if (savefile.build<8) {
				if (savefile.neutronBoosts.basePower>18) savefile.neutronBoosts.basePower=18
				savefile.neutronBoosts.ppPower=Math.round(savefile.neutronBoosts.ppPower*20/5*50)/50
			}
			if (savefile.build<9) {
				if (savefile.neutronBoosts.basePower>15) savefile.neutronBoosts.basePower=15
				savefile.neutronBoosts.ppPower=Math.round(savefile.neutronBoosts.ppPower*5/2*20)/20
			}
			if (savefile.build<11) {
				savefile.neutronBoosts.basePower-=10
				savefile.neutronBoosts.ppPower=Math.round(savefile.neutronBoosts.ppPower*2/5*50)/50
			}
			if (savefile.build<12) {
				if (savefile.notation=='Color') savefile.notation='Standard'
			}
			if (savefile.build<14) {
				savefile.neutronBoosts.ppPower=Math.round(savefile.neutronBoosts.ppPower*3/4*200)/200
			}
			if (savefile.build<15) {
				for (i=0;i<savefile.lastSupernovas.length;i++) {
					savefile.lastSupernovas[i][3]=1
				}
			}
			if (savefile.build<16) {
				savefile.rewardBoxes=[0,0,0]
			}
			if (savefile.build<17) {
				if (savefile.autobuyers.transfer!=undefined) savefile.autobuyers.transfer.tp=(savefile.buyinshopFeatures.includes(5))?1e10:1/0
				if (savefile.buyinshopFeatures.includes(6)) savefile.autobuyers.supernova={lastTick:player.playtime,disabled:false,ns:100}
			}
			if (savefile.build<23) {
				var oldAch=savefile.achievements
				savefile.story=[]
				savefile.achievements=[]
				for (i=0;i<oldAch.length;i++) {
					if (typeof(oldAch[i])=='number') {
						savefile.story.push(oldAch[i])
					} else {
						savefile.achievements.push(oldAch[i])
					}
				}
			}
			if (savefile.build<24) {
				var oldAch=savefile.achievements
				savefile.achievements=[]
				for (i=1;i<9;i++) {
					if (oldAch.includes('bonus'+i)) {
						savefile.achievements.push(i)
					}
				}
				
				var oldStory=savefile.story
				var newStoryIds=[1,7,9,17,14,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34]
				savefile.story=0
				for (i=1;i<23;i++) {
					var j=i
					if (i==3) {
						j=4
					} else if (i==4) {
						j=3
					}
					if (oldStory.includes(i)) {
						savefile.story=newStoryIds[i-1]
					}
				}
				
				savefile.headstarts=true
			}
			if (savefile.build<26) {
				var oldAch=savefile.achievements
				savefile.achievements=[]
				for (i=1;i<9;i++) {
					if (i>4) {
						savefile.achievements.push(i+1)
					} else {
						savefile.achievements.push(i)
					}
				}
				
				if (savefile.story>19) {
					savefile.story--
					savefile.achievements.push(5)
				}
			}
			if (savefile.build<27) {
				savefile.challengeUnlocked=0
			}
			if (savefile.build<=28) {
				savefile.subbuild=13
				if (savefile.subbuild<14) {
					for (i=0;i<6;i++) {
						if (savefile.prestigePeak[i]==undefined) savefile.prestigePeak[i]=0
					}
					if (Decimal.gt(savefile.prestigePower,savefile.prestigePeak[0])) savefile.prestigePeak[0]=savefile.prestigePower
					if (Decimal.gt(savefile.transferPoints,savefile.prestigePeak[1])) savefile.prestigePeak[1]=savefile.transferPoints
					if (Decimal.gt(savefile.neutronStars,savefile.prestigePeak[2])) savefile.prestigePeak[2]=savefile.neutronStars
				}
				savefile.subbuild=1
			}
			if (savefile.build<=29) {
				if (savefile.subbuild<3) {
					savefile.updateRate=20
					savefile.gainPeak=[0,0]
				}
				if (savefile.subbuild<5) {
					savefile.totalTP=0
					savefile.totalNS=0
				}
				if (savefile.subbuild<7) {
					savefile.theme=savefile.lightTheme?'Light':'Normal'
					delete savefile.lightTheme
				}
				savefile.subbuild=1
			}
			if (savefile.build<30) {
				savefile.neutronBoosts.ppPower=Math.min(Math.floor(savefile.neutronBoosts.ppPower*200/3)*3/80,0.15)
			}
			if (savefile.build<37) {
				if (savefile.story==22) savefile.story=23
				else if (savefile.story==23) savefile.story=22
				else if (savefile.story==31) savefile.story=32
				else if (savefile.story==32) savefile.story=35
				else if (savefile.story==33) savefile.story=34
			}
			if (savefile.build<38) {
				var newAchievements=[]
				for (i=1;i<10;i++) {
					var newAchList=[1,2,4,5,7,8,9,10,11]
					if (savefile.achievements.includes(i)) newAchievements.push(newAchList[i-1])
				}
				savefile.achievements=newAchievements
				savefile.prestigePlaytime=savefile.transferPlaytime
				savefile.supernovaHeadstart=savefile.headstarts
			}
			if (savefile.build<40) {
				savefile.useMonospaced=false
				savefile.hotkeys=true
			}
			if (savefile.build<41) {
				savefile.achievements=[]
			}
		}
		if (savefile.version<0.651) {
			savefile.neutronBoosts.powers[0]=Math.min(savefile.neutronBoosts.powers[0],20)
			savefile.neutronBoosts.powers[1]=Math.min(savefile.neutronBoosts.powers[1],20)
			savefile.neutronBoosts.powers[2]=Math.min(savefile.neutronBoosts.powers[2],30)
		}
		if (savefile.version<0.652) {
			savefile.explanations=false
		}
		if (savefile.version<=0.652) {
			savefile.build=0
			savefile.subbuild=0
		}
		if (savefile.version<=0.7) {
			if (savefile.build!=undefined) {
				if (savefile.build<4||(savefile.build==4&&savefile.subbuild<4)) {
					savefile.preSupernova=false
					savefile.aliens={lastTick:0,amount:0,progress:0,interval:0,resets:0,kept:0,upgrades:[0,0,0,0,0,0]}
					savefile.neutronBoosts.powers[0]=Math.min(savefile.neutronBoosts.powers[0],20)
					savefile.neutronBoosts.powers[1]=Math.min(savefile.neutronBoosts.powers[1],20)
					savefile.neutronBoosts.powers[2]=Math.min(savefile.neutronBoosts.powers[2],30)
				}
				if (savefile.build<5) {
					savefile.overlimit=false
				}
				if (savefile.build<6) {
					savefile.fifthRowUnlocked=false
				}
				if (savefile.build<7) {
					savefile.secondSetUnlocked=savefile.fifthRowUnlocked
					delete savefile.fifthRowUnlocked
				}
				if (savefile.build<8&&savefile.notation=='Same-Letters') savefile.notation='Repoalphabet'
				if (savefile.build<9) savefile.chall14Stuff=[]
				if (savefile.build<=11) {
					if (savefile.build<11) savefile.subbuild=0
					if (savefile.subbuild<4) if (savefile.challengeUnlocked==undefined) savefile.challengeUnlocked=0
					if (savefile.subbuild<5.1) {
						for (i=0;i<10;i++) {
							if (typeof(savefile.autobuyerPriorities[i])=='string') savefile.autobuyerPriorities[i]=parseInt(savefile.autobuyerPriorities[i])
						}
					}
					if (savefile.subbuild<7) {
						if (savefile.breakLimit==undefined) savefile.breakLimit=true
					}
					if (savefile.subbuild<7.1) {
						savefile.beta=savefile.build
						savefile.alpha=savefile.subbuild
						
						delete savefile.build
						delete savefile.subbuild
					}
				}
			}
			if (savefile.beta<11.1) savefile.alpha=0
			if (savefile.beta<12||(savefile.beta==12&&savefile.alpha<8)) {
				savefile.offlineProgress=true
				savefile.milestones=0
				savefile.storyEnabled=(savefile.alpha<1)
				savefile.achievements=[]
				savefile.ach2possible=false
				savefile.neutrons=0
				savefile.totalNeutrons=0
				delete savefile.story
			}
			if (savefile.beta==12&&savefile.alpha<8.11) console.log('Thanks for playing Alpha version!')
		}
		
		savefile.stars=new Decimal(savefile.stars)
		savefile.totalStars=new Decimal(savefile.totalStars)
		for (i=0;i<10;i++) {
			savefile.generators[i].amount=new Decimal(savefile.generators[i].amount)
			if (savefile.generators[i].bought>9007199254740992) savefile.generators[i].bought=BigInteger.parseInt(savefile.generators[i].bought)
			savefile.neutronTiers[i].amount=new Decimal(savefile.neutronTiers[i].amount)
			if (savefile.neutronTiers[i].bought>9007199254740992) savefile.neutronTiers[i].bought=BigInteger.parseInt(savefile.neutronTiers[i].bought)
		}
		for (i=0;i<savefile.prestigePeak.length;i++) {
			savefile.prestigePeak[i]=new Decimal(savefile.prestigePeak[i])
		}
		savefile.prestigePower=new Decimal(savefile.prestigePower)
		savefile.transferPoints=new Decimal(savefile.transferPoints)
		savefile.totalTP=new Decimal(savefile.totalTP)
		for (i=0;i<savefile.gainPeak.length;i++) {
			savefile.gainPeak[i]=new Decimal(savefile.gainPeak[i])
		}
		for (i=0;i<savefile.lastSupernovas.length;i++) {
			savefile.lastSupernovas[i][1]=new Decimal(savefile.lastSupernovas[i][1])
			savefile.lastSupernovas[i][2]=new Decimal(savefile.lastSupernovas[i][2])
		}
		savefile.neutronStars=new Decimal(savefile.neutronStars)
		savefile.totalNS=new Decimal(savefile.totalNS)
		savefile.challPow=new Decimal(savefile.challPow)
		if (savefile.autobuyers.transfer!=undefined) {
			savefile.autobuyers.transfer.times=new Decimal(savefile.autobuyers.transfer.times)
			savefile.autobuyers.transfer.tp=new Decimal(savefile.autobuyers.transfer.tp)
		}
		if (savefile.autobuyers.prestige!=undefined) savefile.autobuyers.prestige.times=new Decimal(savefile.autobuyers.prestige.times)
		if (savefile.autobuyers.supernova!=undefined) savefile.autobuyers.supernova.ns=new Decimal(savefile.autobuyers.supernova.ns)
		if (savefile.autobuyers.gens!=undefined) if (savefile.autobuyers.gens.bulk>9007199254740992) savefile.autobuyers.gens.bulk=BigInteger.parseInt(savefile.autobuyers.gens.bulk)
		for (i=0;i<3;i++) {
			if (savefile.neutronBoosts.powers[i]>9007199254740992) savefile.neutronBoosts.powers[i]=BigInteger.parseInt(savefile.neutronBoosts.powers[i])
		}
		savefile.neutrons=new Decimal(savefile.neutrons)
		savefile.totalNeutrons=new Decimal(savefile.totalNeutrons)
					
		savefile.quarkStars=new Decimal(savefile.quarkStars)
		savefile.particles=new Decimal(savefile.particles)
		savefile.strings=new Decimal(savefile.strings)
		
		starsLimit=(savefile.breakLimit&&savefile.currentChallenge==0&&!player.preSupernova)?Number.POSITIVE_INFINITY:(savefile.overlimit)?'2.28868105e362':Number.MAX_VALUE
		
		//Cheat
		if (savefile.cheatOptions==undefined) savefile.cheatOptions={}
		if (savefile.cheatOptions.breakLimitNS==undefined) savefile.cheatOptions.breakLimitNS=false
		
		if (player.version<savefile.version) throw 'Since you are playing in version '+player.version+', your savefile that is updated in version '+savefile.version+' has errors to the version you are playing.\nYour savefile has been discarded.'
		if (player.version==savefile.version) {
			if (savefile.beta!=undefined) {
				if (player.beta<savefile.beta) throw 'Since you are playing in beta '+player.beta+', your savefile that is updated in beta '+savefile.beta+' has errors to the beta you are playing.\nYour savefile has been discarded.'
				if (player.beta==savefile.beta) {
					if (savefile.alpha!=undefined) if (player.alpha<savefile.alpha) throw 'Since you are playing in alpha '+player.alpha+', your savefile that is updated in alpha '+savefile.alpha+' has errors to the alpha you are playing.\nYour savefile has been discarded.'
				}
			}
		}
		savefile.version=player.version
		savefile.beta=player.beta
		savefile.alpha=player.alpha
		
		player=savefile
		updateExplanations()
		updateTheme(player.theme)
		updateFont()
		if (player.stars.gte(starsLimit)) { player.stars=new Decimal(starsLimit); reset(3) }
		if (player.neutronStars.gte(Number.MAX_VALUE)&&!player.cheatOptions.breakLimitNS) { player.neutronStars=new Decimal(Number.MAX_VALUE); reset(4) }
		if (player.quarkStars.gte(Number.MAX_VALUE)) { player.quarkStars=new Decimal(Number.MAX_VALUE); reset(5) }
		if (player.particles.gte(Number.MAX_VALUE)) { player.particles=new Decimal(Number.MAX_VALUE); reset(6) }
		updateCosts()
		updateAutobuyers()
		updateMilestones()
		updateNeutronBoosts()
		updateNeutronPower()
		console.log('Game loaded!')
		
		if (!player.offlineProgress) player.lastUpdate=new Date().getTime()
		gameLoopInterval=setInterval(function(){gameLoop()},1000/player.updateRate)
		return false //return false if loads
	} catch (e) {
		console.log('Your save failed to load:')
		console.error(e)
		gameLoopInterval=setInterval(function(){gameLoop()},1000/player.updateRate)
		return true //return true if there is a error
	}
}

function exportSave() {
	var savefile=btoa(JSON.stringify(player))
	showElement('exportSave','block')
	document.getElementById("exportText").value=btoa(JSON.stringify(player))
}

function importSave() {
	var input=prompt('Copy and paste in your exported file and press enter.')
	if (load(input)) {
		if (input!=null) {
			alert('Your save was invalid or caused a game-breaking bug. :(')
		}
	}
}

function reset(tier,challid=0,gain=1) {
	if (tier==Infinity?confirm('If you hard reset, everything including the save will be lost and you have to start over! Are you sure to do that?'):true) {
		if (challid>0) {
			switch (tier) {
				case 3: if (challid==player.currentChallenge) {return} break;
			}
			if (player.challConfirm) switch (tier) {
				case 3: if (!confirm(((player.notation=='Polynominal exponent'||player.notation=='Color'||player.notation=='Megacolor'||player.notation=='Progress')?'You have to go supernova with special conditions.':'You need to reach '+format(Number.MAX_VALUE)+' stars with special conditions.')+' Some supernova upgrades doesn\'t work while you are in challenge.')) {return} break;
			}
			if (tier==3&&player.preSupernova) {
				if (confirm('You can\'t take a challenge while you are in pre-supernova mode. If you take a challenge, pre-supernova mode would be off.')) player.preSupernova=false
				else return
			}
		}
		if (tier==Infinity) {
			// Highest tier - reset
			player.playtime=0
			player.updateRate=20
			player.lastUpdate=0
			player.layout=1
			player.milestones=0
			player.storyEnabled=false
			player.notation='Standard'
			player.explanations=false
			player.useMonospaced=false
			player.hotkeys=true
			player.theme='Normal'
			player.showProgress=false
			player.totalStars=new Decimal(0)
			player.prestigePeak=[new Decimal(1),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0)]
			player.headstarts=true
			player.achievements=[]
			player.challConfirm=true
			player.totalNeutrons=new Decimal(0)
			if (oldDesign) {
				localStorage.clear('save')
			} else {
				localStorage.clear('save2')
			}
			
			updateExplanations()
			updateMilestones()
			updateTheme('Normal')
			updateFont()
			hideElement('exportSave')
		}
		if (tier>5) {
			//Tier 6 - Quantum
			player.prestiges[5]=(tier==6)?player.prestiges[5]+gain:0
			player.strings=(tier==6)?player.strings.add(getPostPrestigePoints(6)):new Decimal(0)
			player.prestigePeak[5]=(tier==Infinity)?new Decimal(0):(player.strings.gt(player.prestigePeak[5]))?player.strings:player.prestigePeak[5]
		}
		if (tier>4) {
			//Tier 5 - Exotic
			player.prestiges[4]=(tier==5)?player.prestiges[4]+gain:0
			player.particles=(tier==5)?player.particles.add(getPostPrestigePoints(5)):new Decimal(0)
			player.prestigePeak[4]=(tier==Infinity)?new Decimal(0):(player.particles.gt(player.prestigePeak[4]))?player.particles:player.prestigePeak[4]
		}
		if (tier>3) {
			//Tier 4 - Hypernova
			showTooMuch2=false
			SNTab='upgrades'
			if (achTab=='bonus') {
				achTab='nonBonus'
			}
			if (genTab=='neutronTiers') {
				genTab='tiers'
			}
			if (tab=='supernova') {
				tab='gen'
			}
			
			player.rewardBoxes=[0,0,0]
			player.supernovaUpgrades=[]
			player.supernovaTabsUnlocked=0
			player.challengeUnlocked=0
			player.challengesCompleted={}
			player.autobuyers={}
			player.buyinshopFeatures=[]
			player.autobuyerPriorities=[1,2,3,4,5,6,7,8,9,10]
			player.breakLimit=false
			player.neutronBoosts={basePower:0,powers:[0,0,0],ppPower:0}
			for (i=0;i<10;i++) {
				player.neutronTiers[i].bought=0
			}
			player.secondSetUnlocked=false
			player.aliens.upgrades=[0,0,0,0,0,0]
			player.prestiges[3]=(tier==4)?player.prestiges[3]+gain:0
			player.quarkStars=(tier==4)?player.quarkStars.add(getPostPrestigePoints(4)):new Decimal(0)
			player.prestigePeak[3]=(tier==Infinity)?new Decimal(0):(player.quarkStars.gt(player.prestigePeak[3]))?player.quarkStars:player.prestigePeak[3]
			
			updateCosts('autobuyers')
			updateCosts('neutronboosts')
			updateNeutronBoosts()
			updateCosts('neutrontiers')
		}
		if (tier>2) {
			//Tier 3 - Supernova
			tooMuch=false
			showTooMuch=false
			if (challid>0) {
				tab='gen'
			}
			
			player.lastTransferPlaytime=player.transferPlaytime
			player.overlimit=false
			player.prestiges[2]=(tier==3)?player.prestiges[2]+gain:0
			player.highestTierPrestiges[2]=0
			player.fastestSupernova=(tier==Infinity)?Number.MAX_VALUE:(player.fastestSupernova>player.supernovaPlaytime)?player.supernovaPlaytime:player.fastestSupernova
			if ((tier==3&&gain>0)?player.lastSupernovas.unshift([player.supernovaPlaytime,player.stars,getPostPrestigePoints(3),gain])>10:false) {
				player.lastSupernovas.pop()
			} else if (tier==Infinity) {
				player.lastSupernovas=[]
			}
			if (player.currentChallenge==0) {
				if (player.supernovaPlaytime<30&&!player.supernovaHeadstart) getAchievement(1)
				if (player.supernovaPlaytime<90&&player.ach2possible) getAchievement(2)
			}
			player.supernovaPlaytime=0
			player.neutronStars=(tier==3)?player.neutronStars.add((gain>0)?getPostPrestigePoints(3):0):new Decimal(0)
			player.totalNS=(tier==3)?player.totalNS.add((gain>0)?getPostPrestigePoints(3):0):(tier==Infinity)?new Decimal(0):player.totalNS
			if (tier==3&&gain>0&&player.currentChallenge>0) {
				if (player.challengesCompleted[player.currentChallenge]==undefined&&player.currentChallenge<13) {
					player.challengesCompleted[player.currentChallenge]=1
					player.rewardBoxes[0]++
					tab='supernova'
					SNTab='autobuyers'
					
					var acc=amountChallengeCompleted()
					if (acc>0) newMilestone(31)
					if (acc>1) newMilestone(32)
					if (acc>3) newMilestone(33)
					if (acc>7) newMilestone(34)
					if (acc>11) newMilestone(35)
				} else {
					player.challengesCompleted[player.currentChallenge]++
				}
			}
			player.currentChallenge=(tier==3&&challid>0)?challid:0
			if (tier==3&&player.headstarts&&player.currentChallenge==0&&!player.preSupernova) {
				player.supernovaHeadstart=false
				player.ach2possible=true
			} else {
				player.supernovaHeadstart=true
				player.ach2possible=false
			}
			player.transferUpgrades=(player.supernovaUpgrades.includes(2)&&player.headstarts&&player.currentChallenge==0&&!player.preSupernova)?[1,2,3,4,5,6,7,8,9,10,11,12,13,14]:[]
			if (!player.breakLimit||player.preSupernova||player.currentChallenge>0) starsLimit=Number.MAX_VALUE
			if (tier==3&&gain>0&&player.autobuyers.interval==undefined) player.autobuyers.interval=10
			if (tier==3&&gain>0&&player.autobuyers.upgrade==undefined) {player.autobuyers.upgrade={lastTick:player.playtime,disabled:false}; updateAutobuyers()}
			player.neutrons=new Decimal(0)
			neutronPower=new Decimal(1)
			for (i=0;i<10;i++) {
				player.neutronTiers[i].amount=new Decimal(player.neutronTiers[i].bought)
			}
			var oldTotalAliens=BigInteger.add(player.aliens.kept,player.aliens.amount)
			if (tier==3&&challid==-1) {
				player.aliens.resets++
				player.aliens.kept=player.aliens.amount/10
			} else {
				player.aliens.resets=0
				player.aliens.kept=0
			}
			player.aliens.lastTick=player.playtime
			player.aliens.amount=0
			player.aliens.progress=0
			var totalAliens=BigInteger.add(player.aliens.kept,player.aliens.amount)
			if (BigInteger.compareTo(oldTotalAliens,totalAliens)!=0) updateNeutronBoosts()
			player.prestigePeak[2]=(tier==Infinity)?new Decimal(0):(player.neutronStars.gt(player.prestigePeak[2]))?player.neutronStars:player.prestigePeak[2]
			player.gainPeak[1]=new Decimal(0)
			if (tier==3&&gain>0) {
				newMilestone(24)
				if (player.totalNS.gte(100)) newMilestone(29)
			}
		}
		if (tier>1) {
			//Tier 2 - transfer
			player.prestiges[1]=(tier==2)?player.prestiges[1]+gain:0
			player.highestTierPrestiges[1]=0
			player.transferPlaytime=0
			player.transferPoints=(tier==2)?player.transferPoints.add(getTransferPoints()):new Decimal(0)
			player.totalTP=(tier==2)?player.totalTP.add(getTransferPoints()):(tier==Infinity)?new Decimal(0):player.totalTP
			player.prestigePeak[1]=(tier==Infinity)?new Decimal(0):(player.transferPoints.gt(player.prestigePeak[1]))?player.transferPoints:player.prestigePeak[1]
			player.gainPeak[0]=new Decimal(0)
			if (tier==2) newMilestone(18)
			if (player.headstarts&&player.currentChallenge==0&&!player.preSupernova) {
				player.supernovaHeadstart=true
				player.ach2possible=false
			}
		}
		//Tier 1 - prestige
		var oldPP=player.prestigePower
		player.prestiges[0]=(tier==1)?player.prestiges[0]+gain:0
		player.highestTierPrestiges[0]=0
		player.prestigePlaytime=0
		player.prestigePower=(tier==1)?getPrestigePower():(player.supernovaUpgrades.includes(3)&&player.headstarts&&player.currentChallenge==0&&!player.preSupernova)?getPPHeadstart():new Decimal(1)
		player.prestigePeak[0]=(tier==Infinity)?new Decimal(1):(player.prestigePower.gt(player.prestigePeak[0]))?player.prestigePower:player.prestigePeak[0]
		if (tier==1) {
			newMilestone(12)
			if (player.prestigePower.gt(5)) newMilestone(13)
			if (player.prestigePower.gt(10)) newMilestone(14)
			if (player.prestigePower.gt(20)) newMilestone(15)
			if (player.prestigePower.gt(50)) newMilestone(16)
			if (player.prestigePower.gt(75)) newMilestone(17)
			
			var ratio=player.prestigePower.div(oldPP)
		}
		
		//Any tier
		player.stars=new Decimal(player.achievements.includes(1)?100:10)
		player.generators=[{amount:new Decimal(0),bought:0},{amount:new Decimal(0),bought:0},{amount:new Decimal(0),bought:0},{amount:new Decimal(0),bought:0},{amount:new Decimal(0),bought:0},{amount:new Decimal(0),bought:0},{amount:new Decimal(0),bought:0},{amount:new Decimal(0),bought:0},{amount:new Decimal(0),bought:0},{amount:new Decimal(0),bought:0}]
		
		ppsSingles=[new Decimal(0)]
		pps=[new Decimal(0)]
		ppt=[new Decimal(0)]

		player.challPow=new Decimal(player.currentChallenge==11?0.1:1)
		player.chall14Stuff=[]
		
		updateCosts('gens')
	}
}

function toggle(id) {
	player[id]=!player[id]
	if (id=='explanations') updateExplanations()
	if (id=='storyEnabled') updateMilestones()
	if (id=='breakLimit') {
		starsLimit=(player.breakLimit&&player.currentChallenge==0&&!player.preSupernova)?Number.POSITIVE_INFINITY:(player.overlimit||player.stars.gte(Number.MAX_VALUE))?'2.28868105e362':Number.MAX_VALUE
		if (player.stars.gte(starsLimit)) reset(3)
			
		newMilestone(40)
	}
	if (id=='preSupernova') {
		if (player.preSupernova) {
			if (!confirm('Pre-supernova mode is a mode where you start at beginning even before your first supernova. Are you sure you want to do that?')) {
				player.preSupernova=false
			} else if (player.currentChallenge==0) {
				reset(3,0,0)
			} else if (!confirm('If you start with pre-supernova mode on, your current challenge will be lost! Are you sure you want to do that?')) {
				player.preSupernova=false
			} else {
				reset(3,0,0)
			}
		} else {
			if (!confirm('You are leaving pre-supernova mode. This will enable your supernova features again that you got.')) player.preSupernova=true
		}
	}
	if (id=='useMonospaced') updateFont()
}

function checkToReset(tier) {
	if (tier==1&&player.stars.gte(player.transferUpgrades.includes(7)?1e38:1e39)&&getPrestigePower().gt(player.prestigePower)&&tab!='toomuch') reset(1)
	if (tier==2&&player.prestigePower.gte(100)&&tab!='toomuch') reset(2)
	if (tier==3&&player.stars.gte(Number.MAX_VALUE)) reset(3)
	if (tier==-1&&player.aliens.amount==20&&player.aliens.resets<5) reset(3,0,-1)
}

function switchUR() {
	clearInterval(gameLoopInterval)
	player.updateRate+=5
	if (player.updateRate==Number.MAX_VALUE) player.updateRate=5
	if (player.updateRate==65) player.updateRate=Number.MAX_VALUE
	gameLoopInterval=setInterval(gameLoop,1000/player.updateRate)
}

function updateMilestones() {
	updateElement('milestones',player.milestones+'/'+milestoneRequirements.length)
	updateElement('storyOption',(player.storyEnabled?'Disable':'Enable')+' story')
	var temp=1
	while (document.getElementById('milestone'+temp)) {
		if (temp>player.milestones+1) {
			hideElement('milestone'+temp)
		} else {
			var message=''
			if (oldDesign) {
				showElement('milestone'+temp,'table-cell')
				message='<b>Milestone #'+temp+'</b>: '+milestoneRequirements[temp-1]+'<br>'
			} else {
				showElement('milestone'+temp,'table-row')
				updateElement('ms'+temp+'requirement','<b>Milestone #'+temp+'</b>:<br>'+milestoneRequirements[temp-1])
			}
			var msCompletion=(oldDesign)?'milestone'+temp:'ms'+temp+'completion'
			if (player.milestones>=temp) {
				updateElement(msCompletion,message+'Completed'+((player.storyEnabled&&storyMessages.length>=temp)?'<br><b>Story</b>: '+storyMessages[temp-1]:''))
				updateClass(msCompletion,'achCompleted')
			} else {
				updateElement(msCompletion,message+'Incomplete')
				updateClass(msCompletion,'ach')
			}
		}
		temp++
	}
	
	var temp=1
	do {
		if (player.achievements.includes(temp)) {
			if (!oldDesign) updateElement('ach'+temp,'Completed')
			updateClass('ach'+temp,'achCompleted')
		} else {
			if (!oldDesign) updateElement('ach'+temp,'Incomplete')
			updateClass('ach'+temp,'ach')
		}
		temp++
	} while (document.getElementById('ach'+temp))
}

function newMilestone(id) {
	if (id>player.milestones) {
		player.milestones=id
	
		var achBox=document.getElementById('achievement')
		achBox.innerHTML='<b>Milestone #'+id+' got!</b><br>'+milestoneRequirements[id-1]
		achBox.style.opacity=1
		
		if (achHide) clearTimeout(achHide)
		var achHide=setTimeout(function(){achBox.style.opacity=0;},6000)
		updateMilestones()
	}
}
	
function switchTab(tabName) {
	tab=tabName
}

function switchTheme() {
	if (player.theme=='Normal') {
		player.theme='Light'
	} else if (player.theme=='Light') {
		player.theme='Original'
	} else if (player.theme=='Original') {
		player.theme='Colorblind'
	} else {
		player.theme='Normal'
	}
	updateTheme(player.theme)
}

function updateExplanations() {
	if (player.explanations) {
		enableTooltip('starsExplanation')
		enableTooltip('transferPoints')
		enableTooltip('supernovaExplanation')
		enableTooltip('neutronStars')
		enableTooltip('autoupgraderExplanation')
		enableTooltip('autotransferExplanation')
		enableTooltip('autoprestigeExplanation')
		enableTooltip('autogeneratorExplanation')
		enableTooltip('autonovaExplanation')
		enableTooltip('neutronboost')
		enableTooltip('NBPowerStarsExplanation')
		enableTooltip('NBPowerTPExplanation')
		enableTooltip('NBPowerNSExplanation')
		enableTooltip('NBBaseExplanation')
		enableTooltip('NBPPPowerExplanation')
		updateTooltip('starsExplanation',explainList.stars)
		updateTooltip('transferPoints',explainList.transfer)
		updateTooltip('supernovaExplanation',explainList.supernova)
		updateTooltip('neutronStars',explainList.supernova)
		updateTooltip('autoupgraderExplanation',explainList.autoupgrader)
		updateTooltip('autotransferExplanation',explainList.autotransfer)
		updateTooltip('autoprestigeExplanation',explainList.autoprestige)
		updateTooltip('autogeneratorExplanation',explainList.autogenerator)
		updateTooltip('autonovaExplanation',explainList.autonova)
		updateTooltip('neutronboost',explainList.nbPowers)
		updateTooltip('NBPowerStarsExplanation',explainList.nbPowers)
		updateTooltip('NBPowerTPExplanation',explainList.nbPowers)
		updateTooltip('NBPowerNSExplanation',explainList.nbPowers)
		updateTooltip('NBBaseExplanation',explainList.nbBase)
		updateTooltip('NBPPPowerExplanation',explainList.nbPPPower)
	} else {
		disableTooltip('starsExplanation')
		disableTooltip('transferPoints')
		disableTooltip('supernovaExplanation')
		disableTooltip('neutronStars')
		disableTooltip('autoupgraderExplanation')
		disableTooltip('autotransferExplanation')
		disableTooltip('autoprestigeExplanation')
		disableTooltip('autogeneratorExplanation')
		disableTooltip('autonovaExplanation')
		disableTooltip('neutronboost')
		disableTooltip('NBPowerStarsExplanation')
		disableTooltip('NBPowerTPExplanation')
		disableTooltip('NBPowerNSExplanation')
		disableTooltip('NBBaseExplanation')
		disableTooltip('NBPPPowerExplanation')
	}
}

function updateFont() {
	if (player.useMonospaced) document.getElementById('font').href='https://fonts.googleapis.com/css?family=Roboto+Mono'
	else document.getElementById('font').href='https://fonts.googleapis.com/css?family=Roboto'
}

function updateTheme(id) {
	if (!oldDesign&&themeSelected!=id) {
		themeSelected=id
		document.getElementById('theme').href='stylesheets/theme_'+id.toLowerCase()+'.css'
	}
}
	
function getCost(tier,bulk=1) {
	var multiplier=getCostMultiplier(tier)
	return Decimal.pow(multiplier,bulk).sub(1).div(multiplier-1).times(costs.tiers[tier-1])
}
	
function updateCosts(id='all') {
	if (id=='gens'||id=='all') {
		for (i=1;i<Math.min(player.highestTierPrestiges[0]+2,(player.currentChallenge==3)?10:11);i++) {
			var multiplier=getCostMultiplier(i)
			var cost=Decimal.pow(10,(player.currentChallenge==4&&i>1)?1:i*(0.9+0.1*i)).times(Decimal.pow(multiplier,player.generators[i-1].bought))
			if (player.supernovaUpgrades.includes(11)&&!player.preSupernova&&player.currentChallenge==0) cost=cost.div(Decimal.pow(multiplier,player.prestigePower.log10()).pow(0.1))
			if (player.currentChallenge==12) cost=cost.times(Decimal.pow(multiplier,BigInteger.divide(BigInteger.add(BigInteger.add(BigInteger.add(BigInteger.add(BigInteger.add(BigInteger.add(BigInteger.add(BigInteger.add(BigInteger.add(player.generators[0].bought,player.generators[1].bought),player.generators[2].bought),player.generators[3].bought),player.generators[4].bought),player.generators[5].bought),player.generators[6].bought),player.generators[7].bought),player.generators[8].bought),player.generators[9].bought),250)))
			if (neutronPower.gt(1)&&!player.preSupernova) cost=cost.div(neutronPower)
			costs.tiers[i-1]=cost
		}
	}
	if (id=='autobuyers'||id=='all') {
		if (player.autobuyers.interval!=undefined) costs.intReduceCost=Math.floor(Math.pow((player.autobuyers.interval==undefined)?Infinity:10/player.autobuyers.interval,1.43458799))
		if (player.autobuyers.gens!=undefined) {
			if (Decimal.gte(player.autobuyers.gens.bulk,256)) {
				costs.bbCost=Decimal.pow(2,BigInteger.divide(player.autobuyers.gens.bulk,128)).times(256e3)
			} else {
				costs.bbCost=player.autobuyers.gens.bulk*250
			}
		}
	}
	if (id=='neutronboosts'||id=='all') {
		if (Decimal.gt(player.neutronBoosts.powers[0],9)){
			costs.neutronBoosts[0]=Decimal.pow(Number.MAX_VALUE,-4.75).times(Decimal.pow(Decimal.pow(Number.MAX_VALUE,2.25),player.neutronBoosts.powers[0]))
		} else {
			costs.neutronBoosts[0]=Decimal.pow(Number.MAX_VALUE,2).times(Decimal.pow(Decimal.pow(Number.MAX_VALUE,1.5),player.neutronBoosts.powers[0]))
		}
		if (Decimal.gt(player.neutronBoosts.powers[1],9)){
			costs.neutronBoosts[1]=Decimal.pow(Number.MAX_VALUE,-19/240).times(Decimal.pow(Decimal.pow(Number.MAX_VALUE,3/80),player.neutronBoosts.powers[1]))
		} else {
			costs.neutronBoosts[1]=Decimal.pow(Number.MAX_VALUE,1/30).times(Decimal.pow(Decimal.pow(Number.MAX_VALUE,1/40),player.neutronBoosts.powers[1]))
		}
		if (Decimal.gt(player.neutronBoosts.powers[2],9)){
			costs.neutronBoosts[2]=Decimal.pow(Math.pow(10,1.5),player.neutronBoosts.powers[2])
		} else {
			costs.neutronBoosts[2]=Decimal.pow(10,player.neutronBoosts.powers[2]).times(1e5)
		}
		costs.neutronBoosts[3]=Decimal.pow(10,player.neutronBoosts.basePower+8)
		costs.neutronBoosts[4]=Decimal.pow(10,player.neutronBoosts.ppPower/0.0375+14)
	}
	if (id=='neutrontiers'||id=='all') { 
		for (i=0;i<10;i++) {
			costs.neutronTiers[i]=Decimal.times(Math.pow(10,Math.floor((i+8)/2)*Math.floor((i+9)/2)),Decimal.pow(Math.pow(10,i+Math.floor((i+4)/2)+Math.floor(Math.max(i-1,0)/3)*2),player.neutronTiers[i].bought))
		}
	}
}

function getCostMultiplier(tier) {
	return Math.pow((player.currentChallenge==2)?2.5:1.5,((player.currentChallenge==4)?(tier+2)/3:tier)*(tier+9)/10-((tier==10&&player.transferUpgrades.includes(8))?1:0))
}

function isWorthIt(tier) {
	if (typeof(tier)=='number') {
		var cost=costs.tiers[tier-1]
		if (player.currentChallenge==4&&tier>1) return player.generators[tier-2].amount.gte(cost)
		if (player.currentChallenge==14&&player.chall14Stuff.includes(tier)) return false
		return player.stars.gte(cost)
	} else {
		if (tier.indexOf('nt')>-1) {
			return player.neutronStars.gte(costs.neutronTiers[parseInt(tier.split('nt')[1])-1])
		}
		return false
	}
}
	
function buyGen(tier,bulk=1,quick=false) {
	if (tier>player.highestTierPrestiges[0]+1) return
	if (!quick) if (!isWorthIt(tier)) return
	
	var multiplier=getCostMultiplier(tier)
	var resource=(player.currentChallenge==4&&tier>1)?player.generators[tier-2].amount:player.stars
	if (player.currentChallenge==14) {
		var maxBulk=1
	} else {
		var maxBulk=resource.div(costs.tiers[tier-1]).times(multiplier-1).plus(1).log(multiplier)
		if (Decimal.lte(maxBulk,9007199254740992)) maxBulk=Math.floor(maxBulk)
	}
	if (bulk==0) bulk=maxBulk
	else if (Decimal.gt(bulk,maxBulk)) bulk=maxBulk
	else if (BigInteger.compareTo(bulk,maxBulk)>0) bulk=maxBulk
	for (i=0;i<6;i++) {
		if (bulk>0&&tier>player.highestTierPrestiges[i]) {
			player.highestTierPrestiges[i]=tier
		}
	}
	
	var spentAmount=getCost(tier,bulk)
	if (player.currentChallenge==4&&tier>1) {
		player.generators[tier-2].amount=player.generators[tier-2].amount.sub(spentAmount)
	} else {
		player.stars=player.stars.sub(spentAmount)
	}
	player.generators[tier-1].bought=BigInteger.add(player.generators[tier-1].bought,bulk)
	player.generators[tier-1].amount=player.generators[tier-1].amount.add(bulk)
	updateCosts('gens')
	
	newMilestone(tier)
	if (tier==10) if (Decimal.gt(player.generators[9].bought,4)) newMilestone(11)
	
	if (tier==1&&!player.achievements.includes(3)) if (player.generators[0].bought>39&&player.generators[1].bought==0&&player.prestigePower.eq(1)&&player.transferUpgrades.length==0) getAchievement(3)
		
	if (player.currentChallenge==7) {
		for (j=0;j<tier-1;j++) {
			player.generators[j].amount=new Decimal(0)
		}
	}
	if (player.currentChallenge==8) player.challPow=new Decimal(1)
	if (player.currentChallenge==11) player.challPow=new Decimal(0.1)
	if (player.currentChallenge==13) player.challPow=Decimal.pow(1.01,bulk).times(player.challPow).min(2)
	if (player.currentChallenge==14?player.chall14Stuff.unshift(tier)>player.highestTierPrestiges[0]-3:false) player.chall14Stuff.pop()
}
	
function maxAll() {
	var buyTiers=[]
	for (i=1;i<Math.min(player.highestTierPrestiges[0]+2,(player.currentChallenge==3)?10:11);i++) {
		if (isWorthIt(i)) {
			buyTiers.push(i)
		}
	}
	for (j=buyTiers.length;j>0;j--) {
		var tierNum=buyTiers[j-1]
		var multiplier=getCostMultiplier(tierNum)
		var resource=(player.currentChallenge==4&&tierNum>1)?player.generators[tierNum-2].amount:player.stars.div(player.currentChallenge==4?1:j)
		if (player.currentChallenge==14) {
			var bulk=1
		} else {
			var bulk=resource.div(costs.tiers[tierNum-1]).times(multiplier-1).plus(1).log(multiplier)
		}
		if (Decimal.lte(bulk,9007199254740992)) bulk=Math.floor(bulk)
		for (k=0;k<6;k++) {
			if (bulk>0&&tierNum>player.highestTierPrestiges[k]) {
				player.highestTierPrestiges[k]=tierNum
			}
		}
		
		var spentAmount=getCost(tierNum,bulk)
		if (player.currentChallenge==4&&tierNum>1) {
			player.generators[tierNum-2].amount=player.generators[tierNum-2].amount.sub(spentAmount)
		} else {
			player.stars=player.stars.sub(spentAmount)
		}
		player.generators[tierNum-1].bought=BigInteger.add(player.generators[tierNum-1].bought,bulk)
		player.generators[tierNum-1].amount=player.generators[tierNum-1].amount.add(bulk)
		updateCosts('gens')
	
		if (Decimal.gt(bulk,0)) {
			newMilestone(tierNum)
			if (tierNum==10) if (Decimal.gt(player.generators[9].bought,4)) newMilestone(11)
			if (player.currentChallenge==7) {
				for (k=0;k<j-1;k++) {
					player.generators[k].amount=new Decimal(0)
				}
			}
			if (player.currentChallenge==8) player.challPow=new Decimal(1)
			if (player.currentChallenge==11) player.challPow=new Decimal(0.1)
			if (player.currentChallenge==13) player.challPow=Decimal.pow(1.01,bulk).times(player.challPow).min(2)
			if (player.currentChallenge==14?player.chall14Stuff.unshift(tier)>player.highestTierPrestiges[0]-3:false) player.chall14Stuff.pop()
				
			player.ach2possible=false
		}
	}
}
	
function getGeneratorMultiplier(tier,chall5effect=true) {
	if (player.generators[tier].amount.eq(0)) multi=new Decimal(0)
		
	var multi
	if (Decimal.gt(player.generators[tier].bought,0)) multi=Decimal.pow((tier==9&&player.supernovaUpgrades.includes(9)&&player.currentChallenge==0)?1.13:(tier==9&&player.transferUpgrades.includes(10))?1.1:(player.currentChallenge==1)?1.03:1.05,player.generators[tier].bought)
	else multi=new Decimal(1)
	
	multi=multi.times(player.prestigePower)
	if (player.transferUpgrades.includes(1)&&player.generators[tier].amount.gte(10)) {
		var log10=player.generators[tier].amount.log10()
		if (log10<9007199254740992) log10=Math.floor(log10)
		multi=multi.times(Decimal.pow(Decimal.pow(1.05,log10),player.currentChallenge==6?0.9:1))
	}
	if (player.transferUpgrades.includes(2)) multi=multi.times(getUpgradeMultiplier('tupg2'))
	if (player.transferUpgrades.includes(3)) multi=multi.times(getUpgradeMultiplier('tupg3'))
	if (player.transferUpgrades.includes(4)) multi=multi.times(getUpgradeMultiplier('tupg4'))
	if (player.transferUpgrades.includes(5)) multi=multi.times(getUpgradeMultiplier('tupg5'))
	if (player.transferUpgrades.includes(12)) multi=multi.times(Math.pow(3,player.currentChallenge==6?0.9:1))
	
	if (!player.preSupernova) {
		if (player.supernovaUpgrades.includes(1)) multi=multi.times(getUpgradeMultiplier('snupg1'))
		if (player.supernovaUpgrades.includes(4)) multi=multi.times(getUpgradeMultiplier('snupg4'))
		if (player.supernovaUpgrades.includes(5)) multi=multi.times(1+4/(1+player.supernovaPlaytime/90))
		if (player.supernovaUpgrades.includes(10)) multi=multi.times(getUpgradeMultiplier('snupg10'))
		if (player.supernovaUpgrades.includes(12)&&player.currentChallenge==0) multi=multi.times(getUpgradeMultiplier('snupg12'))
		if (player.supernovaUpgrades.includes(13)) multi=multi.times(getUpgradeMultiplier('snupg13'))
		if (player.supernovaUpgrades.includes(14)&&player.currentChallenge==0) multi=multi.times(10)
		if (player.supernovaUpgrades.includes(15)) multi=multi.times(getUpgradeMultiplier('snupg15'))
		if (player.supernovaUpgrades.includes(16)&&tier==0) multi=multi.times(Decimal.pow(1.05,player.generators[9].amount))
		if (player.achievements.includes(2)&&!player.supernovaHeadstart) multi=multi.times(3)
		if (player.achievements.includes(3)&&tier==0) multi=multi.times(player.generators[0].bought)
	}
		
	if (player.currentChallenge==5&&chall5effect) {
		if (tier==0) {
			for (j=1;j<player.highestTierPrestiges[0];j++) {
				getGeneratorMultiplier(j)
				multi=multi.times(ppsSingles[j])
			}
		} else {
			multi=multi.pow(1.01).times(BigInteger.add(player.generators[j].bought,1)).add(1)
		}
	}
	if (player.currentChallenge==8||player.currentChallenge==11) multi=multi.times(player.challPow)
	if (player.currentChallenge==10&&tier==9) multi=multi.pow(0.9)
	if (player.currentChallenge==15) multi=multi.pow(player.stars.pow(-0.05))
		
	if (neutronBoost.gt(1)&&!player.preSupernova) multi=multi.times(neutronBoost)
		
	if (!chall5effect) return multi.times(player.generators[tier].amount)
	ppsSingles[tier]=multi
}

function getPrestigePower(stars) {
	if (stars==undefined) stars=player.stars
	multi=Decimal.root(stars,20).times(player.transferUpgrades.includes(7)?0.0314731353:0.0280504614)
	tupg6mult=Decimal.pow(multi.max(10).log10(),(player.currentChallenge==6)?0.23693598:0.2632622)
	if (player.transferUpgrades.includes(6)) multi=multi.times(tupg6mult)
	if (player.transferUpgrades.includes(9)) multi=multi.times(Math.pow(2,(player.currentChallenge==6)?0.9:1))
	if (player.transferUpgrades.includes(11)) multi=multi.times(getUpgradeMultiplier('tupg11'))
	if (player.transferUpgrades.includes(14)) multi=multi.times(getUpgradeMultiplier('tupg14'))

	if (!player.preSupernova&&player.currentChallenge==0) {
		if (player.supernovaUpgrades.includes(6)) multi=multi.times(getUpgradeMultiplier('snupg6'))
		if (player.supernovaUpgrades.includes(8)) multi=multi.times(3)
	}
		
	if (player.currentChallenge==9) multi=multi.pow(0.85)
	if (player.currentChallenge==13) multi=multi.pow(player.challPow)
		
	if (neutronBoostPP.gt(1)) multi=multi.times(neutronBoostPP)
		
	return multi
}

function getTransferPoints() {
	multi=player.prestigePower.div(100).cbrt()
	if (player.transferUpgrades.includes(13)) multi=multi.times(getUpgradeMultiplier('tupg13'))
	if (player.currentChallenge==9) multi=multi.pow(1.17)

	if (!player.preSupernova&&player.currentChallenge==0) {
		if (player.supernovaUpgrades.includes(7)) multi=multi.times(getUpgradeMultiplier('snupg7'))
	}	
	
	return multi.floor()
}

function buyTransferUpgrade(num) {
	if (player.transferPoints.gte(costs.tupgs[num-1])&&!player.transferUpgrades.includes(num)&&(num<13||player.transferUpgrades.length>11)) {
		player.transferPoints=player.transferPoints.sub(costs.tupgs[num-1])
		player.transferUpgrades.push(num)
		if (num==8) updateCosts('gens')
			
		if (player.transferUpgrades.length>1) newMilestone(19)
		if (player.transferUpgrades.length>3) newMilestone(20)
		if (player.transferUpgrades.length>7) newMilestone(21)
		if (player.transferUpgrades.length>11) newMilestone(22)
		if (player.transferUpgrades.length>13) newMilestone(23)
	}
}

function getUpgradeMultiplier(name) {
	if (name=='tupg2') return Math.pow(player.playtime/3600,(player.currentChallenge==6)?0.196293863:0.218104292)+1
	if (name=='tupg3') return Math.pow(player.transferPlaytime/60,(player.currentChallenge==6)?0.130304656:0.144782951)+1
	if (name=='tupg4') return Decimal.pow(player.prestigePeak[0].max(10).log10(),(player.currentChallenge==6)?0.0359573356:0.415011197)
	if (name=='tupg5') return Decimal.add(player.prestigePeak[1].max(1).log10(),1).pow((player.currentChallenge==6)?0.498457649:0.553841832)
	if (name=='tupg6') return tupg6mult
	if (name=='tupg11') return Math.max(Math.pow(2/(1+player.transferPlaytime/120),(player.currentChallenge==6)?0.9:1),1)
	if (name=='tupg13') return Decimal.pow(player.prestigePower.log10(),(player.currentChallenge==6)?0.369588574:0.410653971)
	if (name=='tupg14') return Decimal.pow(player.transferPoints.lt(10)?1:player.transferPoints.log10(),(player.currentChallenge==6)?0.339848464:0.377609405)
		
	if (name=='snupg1') return Decimal.add(1,player.generators[0].bought).add(player.generators[1].bought).add(player.generators[2].bought).add(player.generators[3].bought).add(player.generators[4].bought).add(player.generators[5].bought).add(player.generators[6].bought).add(player.generators[7].bought).add(player.generators[8].bought).add(player.generators[9].bought).log10()*1.08374517+1
	if (name=='snupg4') return Decimal.pow(player.totalStars.log10(),1.5).times(0.000923858398)
	if (name=='snupg6') return Math.log10(player.prestiges[2])+1
	if (name=='snupg7') return Decimal.pow((player.neutronStars.lt(1))?1:Decimal.add(player.neutronStars.log10(),1),0.5)
	if (name=='snupg10') return Math.pow(1+player.transferUpgrades.length,0.405683871)
	if (name=='snupg12') return Math.min(1+1.12024118/Math.log10(player.fastestSupernova+1),5)
	if (name=='snupg13') return Math.min(1+1.12024118/Math.log10(player.lastTransferPlaytime*6+1),5)
	if (name=='snupg15') return Math.pow(1+player.achievements.length,0.74492186)
	if (name=='snupg18') return Decimal.pow(player.neutrons,0.3)
	if (name=='snupg19') return Decimal.pow(5,player.neutronTiers[7].bought)
	if (name=='snupg20') return Decimal.pow(player.prestigePower,0.02)
	if (name=='snupg21') return new Decimal(1)
	if (name=='snupg22') return new Decimal(1)
	if (name=='snupg23') return new Decimal(1)
	if (name=='snupg24') return new Decimal(1)
	if (name=='snupg25') return new Decimal(1)
	if (name=='snupg26') return new Decimal(1)
}

function notNow() {
	showTooMuch=false
}

function getPostPrestigePoints(tier) {
	var gainIsOne=false
	if (tier==3) if (!player.breakLimit||player.currentChallenge>0||player.preSupernova) gainIsOne=true
	if (tier==4) if (!player.cheatOptions.breakLimitNS) gainIsOne=true
	if (gainIsOne) return new Decimal(1)
	
	var pointsList=[player.stars,player.neutronStars,player.quarkStars,player.particles]
	var gain=pointsList[tier-3].root(maxValueLog)
	if (gain.lt(Number.MAX_VALUE)) {
		gain=gain.times(Math.pow(10,(gain.log10()-1)/(maxValueLog-1)-1)).floor()
		if (gain.eq(0)) return new Decimal(1)
	}
	return gain
}
	
function switchSNTab(tabName) {
	SNTab=tabName
}
	
function switchAchTab(tabName) {
	achTab=tabName
}
	
function switchGenTab(tabName) {
	genTab=tabName
}

function buySupernovaUpgrade(num) {
	if (player.neutronStars.gte(costs.snupgs[num-1])&&!player.supernovaUpgrades.includes(num)) {
		player.neutronStars=player.neutronStars.sub(costs.snupgs[num-1])
		player.supernovaUpgrades.push(num)
		if (player.supernovaHeadstart) {
			if (num==2) player.transferUpgrades=[1,2,3,4,5,6,7,8,9,10,11,12,13,14]
			if (num==3&&player.prestigePower.lt(getPPHeadstart())) player.prestigePower=getPPHeadstart()
		}
			
		if (player.supernovaUpgrades.length>1) newMilestone(25)
		if (player.supernovaUpgrades.length>3) newMilestone(26)
		if (player.supernovaUpgrades.length>7) newMilestone(27)
		if (player.supernovaUpgrades.length>11) newMilestone(28)
	}
}

function getAchievement(achId) {
	if ((player.prestiges[2]>0||player.neutronStars.gt(0))&&!player.achievements.includes(achId)) {
		player.achievements.push(achId)
	
		var achBox=document.getElementById('achievement')
		achBox.innerHTML='<b>Achievement unlocked!</b><br>'+achList.names[achId-1]+'<br>'+achList.requirements[achId-1]
		achBox.style.opacity=1
		
		if (achHide) clearTimeout(achHide)
		var achHide=setTimeout(function(){achBox.style.opacity=0;},6000)
		updateMilestones()
	}
}

function getPPHeadstart() {
	return player.neutronStars.pow(Math.min(5+Math.max(player.neutronStars.log10()-5,0)*2,15)).min((player.breakLimit)?player.prestigePeak[0]:1e16).max(1)
}

function losereset() {
	player.prestigePower=player.prestigePower.div(2).max(1)
	
	player.stars=new Decimal(10)
	player.generators=[{amount:new Decimal(0),bought:0},{amount:new Decimal(0),bought:0},{amount:new Decimal(0),bought:0},{amount:new Decimal(0),bought:0},{amount:new Decimal(0),bought:0},{amount:new Decimal(0),bought:0},{amount:new Decimal(0),bought:0},{amount:new Decimal(0),bought:0},{amount:new Decimal(0),bought:0},{amount:new Decimal(0),bought:0}]
	
	player.challPow=new Decimal(1)
	
	updateCosts('gens')
}

function amountChallengeCompleted() {
	var amount=0
	for (i in player.challengesCompleted) {
		amount++
	}
	return amount
}

function updateAutobuyers() {
	if (player.autobuyers.upgrade!=undefined) document.getElementById('toggleAutoupgrade').checked=player.autobuyers.upgrade.disabled
	if (player.autobuyers.transfer!=undefined) {
		document.getElementById('autotransferTimes').value=player.autobuyers.transfer.times.toString()
		document.getElementById('autotransferTP').value=player.autobuyers.transfer.tp.toString()
		document.getElementById('toggleAutotransfer').checked=player.autobuyers.transfer.disabled
	}
	if (player.autobuyers.prestige!=undefined) {
		document.getElementById('autoprestigeTimes').value=player.autobuyers.prestige.times.toString()
		document.getElementById('toggleAutoprestige').checked=player.autobuyers.prestige.disabled
	}
	if (player.autobuyers.gens!=undefined) {
		for (i=1;i<11;i++) {
			document.getElementById('toggleAutogen'+i).disabled=(player.autobuyers.gens.tiers[i]==undefined)
			document.getElementById('toggleAutogen'+i).checked=(player.autobuyers.gens.tiers[i]!=undefined?player.autobuyers.gens.tiers[i]:false)
		}
		for (i=0;i<10;i++) {
			document.getElementById('t'+(i+1)+'priority').value=player.autobuyerPriorities[i]
		}
	}
	if (player.autobuyers.supernova!=undefined) {
		document.getElementById('autonovaNS').value=player.autobuyers.supernova.ns.toString()
		document.getElementById('toggleAutonova').checked=player.autobuyers.supernova.disabled
	}
}

function toggleAutobuyer(id,genId) {
	if (id=='gens') {
		player.autobuyers.gens.tiers[genId]=!player.autobuyers.gens.tiers[genId]
	} else {
		player.autobuyers[id].disabled=!player.autobuyers[id].disabled
	}
}

function reduceInt() {
	if (player.neutronStars.gte(costs.intReduceCost)&&player.autobuyers.interval>0.05) {
		player.neutronStars=player.neutronStars.sub(costs.intReduceCost)
		player.autobuyers.interval=Math.max(player.autobuyers.interval*0.8,0.05)
		updateCosts('autobuyers')
		
		if (player.autobuyer.interval==0.05) newMilestone(36)
	}
}

function openRewardBox() {
	if (player.rewardBoxes[1]==0) player.rewardBoxes[1]=5*Math.sqrt(player.rewardBoxes[2]+1)
}

function unlockAutobuyer() {
	var number=player.rewardBoxes[2]
	if (number==0) {
		if (player.autobuyers.transfer==undefined) {
			player.autobuyers.transfer={lastTick:player.playtime,disabled:false,times:new Decimal(2),tp:new Decimal(1/0)}
			processing=false
		}
	} else if (number==1) {
		if (player.autobuyers.prestige==undefined) {
			player.autobuyers.prestige={lastTick:player.playtime,disabled:false,times:new Decimal(10)}
			processing=false
		}
	} else {
		if (player.autobuyers.gens==undefined) player.autobuyers.gens={lastTick:player.playtime,tiers:{},bulk:1}
		if (player.autobuyers.gens.tiers[number-1]==undefined) {
			player.autobuyers.gens.tiers[number-1]=true
			processing=false
		}
	}
	updateAutobuyers()
	player.rewardBoxes[0]--
	player.rewardBoxes[1]=0
	player.rewardBoxes[2]++
}

function buyAutobuyerFeature(num) {
	if (player.neutronStars.gte(costs.bisfeatures[num-1])&&!player.buyinshopFeatures.includes(num)) {
		player.neutronStars=player.neutronStars.sub(costs.bisfeatures[num-1])
		player.buyinshopFeatures.push(num)
			
		switch (num) {
			case 5: player.autobuyers.transfer.tp=new Decimal(1e10); break
			case 6: player.autobuyers.supernova={lastTick:player.playtime,disabled:false,ns:new Decimal(100)}; break
		}
		
		if (player.buyinshopFeatures.length>0) newMilestone(37)
		if (player.buyinshopFeatures.length>1) newMilestone(38)
		if (player.buyinshopFeatures.length>3) newMilestone(39) 
		if (player.buyinshopFeatures.length>5) newMilestone(41) 
		updateAutobuyers()
	}
}

function changePriority(id) {
	var value1=document.getElementById('t'+id+'priority').value
	var index1=player.autobuyerPriorities.findIndex(function(c){return c==value1})
	var value2=player.autobuyerPriorities[id-1]
	player.autobuyerPriorities[index1]=parseInt(value2)
	player.autobuyerPriorities[id-1]=parseInt(value1)
	updateAutobuyers()
}

function buyBulk() {
	if (player.neutronStars.gte(costs.bbCost)&&(player.breakLimit||player.autobuyers.gens.bulk<256)) {
		player.neutronStars=player.neutronStars.sub(costs.bbCost)
		player.autobuyers.gens.bulk=BigInteger.multiply(player.autobuyers.gens.bulk,2)
		updateCosts('autobuyers')
	}
}

function changeTimes(id) {
	player.autobuyers[id].times=new Decimal(document.getElementById('auto'+id+'Times').value)
}

function changeABP(id) {
	if (id=='supernova') {
		player.autobuyers.supernova.ns=new Decimal(document.getElementById('autonovaNS').value)
	} else {
		player.autobuyers.transfer.tp=new Decimal(document.getElementById('autotransferTP').value)
	}
}

function buyBoost(id) {
	switch (id) {
		case 1: 
			if (player.stars.gte(costs.neutronBoosts[0])&&player.neutronBoosts.powers[0]<20) {
				player.stars=player.stars.sub(costs.neutronBoosts[0])
				player.neutronBoosts.powers[0]=BigInteger.add(player.neutronBoosts.powers[0],1)
				updateCosts('neutronboosts')
				updateNeutronBoosts()
			}
		break
		
		case 2: 
			if (player.transferPoints.gte(costs.neutronBoosts[1])&&player.neutronBoosts.powers[1]<20) {
				player.transferPoints=player.transferPoints.sub(costs.neutronBoosts[1])
				player.neutronBoosts.powers[1]=BigInteger.add(player.neutronBoosts.powers[1],1)
				updateCosts('neutronboosts')
				updateNeutronBoosts()
			}
		break
		
		case 3:
			if (player.neutronStars.gte(costs.neutronBoosts[2])&&player.neutronBoosts.powers[2]<30) {
				player.neutronStars=player.neutronStars.sub(costs.neutronBoosts[2])
				player.neutronBoosts.powers[2]=BigInteger.add(player.neutronBoosts.powers[2],1)
				updateCosts('neutronboosts')
				updateNeutronBoosts()
			}
		break
		
		case 4: 
			if (player.neutronStars.gte(costs.neutronBoosts[3])&&player.neutronBoosts.basePower<10) {
				player.neutronStars=player.neutronStars.sub(costs.neutronBoosts[3])
				player.neutronBoosts.basePower++
				updateCosts('neutronboosts')
				updateNeutronBoosts()
			}
		break
		
		case 5: 
			if (player.neutronStars.gte(costs.neutronBoosts[4])&&player.neutronBoosts.ppPower<0.15) {
				player.neutronStars=player.neutronStars.sub(costs.neutronBoosts[4])
				player.neutronBoosts.ppPower=Math.round((player.neutronBoosts.ppPower+0.0375)*80)/80
				updateCosts('neutronboosts')
				updateNeutronBoosts()
			}
		break
	}
}

function updateNeutronBoosts() {
	var totalNeutronBoostPower=BigInteger.add(player.neutronBoosts.powers[0],BigInteger.add(player.neutronBoosts.powers[1],BigInteger.add(player.neutronBoosts.powers[2],totalAliens)))
	neutronBoost=Decimal.pow(10+Math.sqrt(player.neutronBoosts.basePower),totalNeutronBoostPower)
	neutronBoostPP=neutronBoost.pow(player.neutronBoosts.ppPower)
	
	if (totalNeutronBoostPower>4) newMilestone(42)
	if (totalNeutronBoostPower>9) newMilestone(43)
	if (totalNeutronBoostPower>19) newMilestone(44)
}
	
function buyNeutronGen(tier) {
	if (player.neutronStars.lt(costs.neutronTiers[tier-1])) return
		
	player.neutronStars=player.neutronStars.sub(costs.neutronTiers[tier-1])
	player.neutronTiers[tier-1].amount=player.neutronTiers[tier-1].amount.add(1)
	player.neutronTiers[tier-1].bought=BigInteger.add(player.neutronTiers[tier-1].bought,1)
	updateCosts('neutrontiers')
	
	newMilestone(45)
	if (tier==2) newMilestone(46)
	if (tier==3) newMilestone(47)
	if (tier==5) newMilestone(48)
	if (tier==8) newMilestone(49)
	if (tier==10) newMilestone(50)
}
	
function maxAllNT() {
	var buyTiers=[]
	for (i=1;i<11;i++) {
		if (isWorthIt('nt'+i)) {
			buyTiers.push(i)
		}
	}
	for (j=buyTiers.length;j>0;j--) {
		var tierNum=buyTiers[j-1]
		var costMult=Math.pow(10,tierNum+Math.floor((tierNum+3)/2)+Math.floor(Math.max(tierNum-2,0)/3)*2-1)
		var bulk=player.neutronStars.div(j).div(costs.neutronTiers[tierNum-1]).times(costMult-1).plus(1).log(costMult)
		if (Decimal.lte(bulk,9007199254740992)) bulk=Math.floor(bulk)
		
		player.neutronStars=player.neutronStars.sub(Decimal.pow(costMult,bulk).sub(1).div(costMult-1).times(costs.neutronTiers[tierNum-1]))
		player.neutronTiers[tierNum-1].bought=BigInteger.add(player.neutronTiers[tierNum-1].bought,bulk)
		player.neutronTiers[tierNum-1].amount=player.neutronTiers[tierNum-1].amount.add(bulk)
		updateCosts('neutrontiers')
	
		newMilestone(45)
		if (tierNum==2) newMilestone(46)
		if (tierNum==3) newMilestone(47)
		if (tierNum==5) newMilestone(48)
		if (tierNum==8) newMilestone(49)
		if (tierNum==10) newMilestone(50)
	}
}
	
function getNeutronTierMultiplier(tier) {
	var multi=Decimal.pow((player.supernovaUpgrades.includes(17)&&tier==0)?10:5,BigInteger.subtract(player.neutronTiers[tier].bought,1))
	
	if (player.supernovaUpgrades.includes(18)&&tier==1) multi=multi.times(getUpgradeMultiplier('snupg18'))
	if (player.supernovaUpgrades.includes(19)&&tier==2) multi=multi.times(getUpgradeMultiplier('snupg19'))
	if (player.supernovaUpgrades.includes(20)&&tier==3) multi=multi.times(getUpgradeMultiplier('snupg20'))
	if (player.supernovaUpgrades.includes(21)&&tier==4) multi=multi.times(getUpgradeMultiplier('snupg21'))
	if (player.supernovaUpgrades.includes(22)&&tier==5) multi=multi.times(getUpgradeMultiplier('snupg22'))
	if (player.supernovaUpgrades.includes(23)&&tier==6) multi=multi.times(getUpgradeMultiplier('snupg23'))
	if (player.supernovaUpgrades.includes(24)&&tier==7) multi=multi.times(getUpgradeMultiplier('snupg24'))
	if (player.supernovaUpgrades.includes(25)&&tier==8) multi=multi.times(getUpgradeMultiplier('snupg25'))
	if (player.supernovaUpgrades.includes(26)&&tier==9) multi=multi.times(getUpgradeMultiplier('snupg26'))
	
	return multi
}

function updateNeutronPower() {
	var doublePower
	if (Decimal.gt(player.neutrons.log10(),10)) doublePower=20
	else doublePower=Math.max(10+player.neutrons.log10(),15)
	neutronPower=Decimal.pow(player.neutrons.add(1),doublePower)
	updateCosts('gens')
}

function gameTick() {
	var currentTime = new Date().getTime()
	if (player.lastUpdate>0) {
		if (currentTime/1000-lastSave>=60) {
			save()
		}
		
		var diff=(currentTime-player.lastUpdate)/1000
		player.playtime+=diff
		player.prestigePlaytime+=diff
		player.transferPlaytime+=diff
		player.supernovaPlaytime+=diff
		if (!tooMuch) {
			for (a=0;a<(player.currentChallenge==5?1:player.highestTierPrestiges[0]);a++) {
				getGeneratorMultiplier(a)
				pps[a]=ppsSingles[a].times(player.generators[a].amount)
				ppt[a]=pps[a].times(diff)
				if (a==0) {
					player.stars=player.stars.add(ppt[0])
					player.totalStars=player.totalStars.add(ppt[0])
				} else {
					player.generators[a-1].amount=player.generators[a-1].amount.add(ppt[a])
				}
			}
			for (a=0;a<10;a++) {
				if (player.neutronTiers[a].amount.gt(0)) {
					var addAmount=player.neutronTiers[a].amount.times(getNeutronTierMultiplier(a)).times(diff)
					if (a==0) {
						player.neutrons=player.neutrons.add(addAmount)
						player.totalNeutrons=player.totalNeutrons.add(addAmount)
						
						updateNeutronPower()
					} else {
						player.neutronTiers[a-1].amount=player.neutronTiers[a-1].amount.add(addAmount)
					}
				}
			}
		}
		
		if (player.currentChallenge==8&&player.generators[0].amount.eq(0)) player.challPow=player.challPow.times(Decimal.pow(0.99,diff*2))
		if (player.currentChallenge==11) player.challPow=player.challPow.times(Decimal.pow(1.03,diff)).min(1)
		if (player.currentChallenge==13&&player.generators[0].amount.eq(0)) player.challPow=player.challPow.times(Decimal.pow(0.95,diff))
		if (player.stars.lt(0)) player.stars=new Decimal(0)
		if (player.transferPlaytime>0&&player.prestigePower.gte(1e2)) {
			gainRate[0]=getTransferPoints().div(player.transferPlaytime)
			if (gainRate[0].gt(player.gainPeak[0])) player.gainPeak[0]=gainRate[0]
		}
		if (player.supernovaPlaytime>0&&player.stars.gt(Number.MAX_VALUE)) {
			gainRate[1]=Decimal.div(getPostPrestigePoints(3),player.supernovaPlaytime)
			if (gainRate[1].gt(player.gainPeak[1])) player.gainPeak[1]=gainRate[1]
		}
		if (player.stars.gte(starsLimit)||tooMuch) {
			if (player.currentChallenge==0&&!player.overlimit&&!player.breakLimit) {
				starsLimit='2.28868105e362'
				player.overlimit=true
			} else {
				player.stars=new Decimal(starsLimit)
				tooMuch=true
			}
			if (player.supernovaPlaytime>60) showTooMuch=true
			else reset(3)
		}
		if (player.prestigePower.eq(0)) player.prestigePower=new Decimal(1) //Because I need to fix bugs from autobuyers.
		if (player.transferPoints.lt(0)) player.transferPoints=new Decimal(0)
		if (player.neutronStars.lt(0)) player.neutronStars=new Decimal(0)
		if ((player.neutronStars.gte(Number.MAX_VALUE)&&!player.cheatOptions.breakLimitNS)||showTooMuch2) {
			player.neutronStars=new Decimal(Number.MAX_VALUE)
			showTooMuch2=true
		}
		
		if (player.prestiges[2]>0||player.neutronStars.gt(0)) {
			while (streqs.length>player.supernovaTabsUnlocked && player.neutronStars.gte(streqs[player.supernovaTabsUnlocked])) {
				player.supernovaTabsUnlocked++
				if (player.supernovaTabsUnlocked==1) newMilestone(30)
			}
			while (challreqs.length>player.challengeUnlocked && player.neutronStars.gte(challreqs[player.challengeUnlocked])) {
				player.challengeUnlocked++
			}
		}
		
		if (player.autobuyers.interval!=undefined&&!player.preSupernova) {
			var occurrences=0
			if (!tooMuch&&!player.autobuyers.upgrade.disabled) {
				occurrences=Math.floor((player.playtime-player.autobuyers.upgrade.lastTick)/player.autobuyers.interval)
				if (occurrences>0) {
					player.autobuyers.upgrade.lastTick+=occurrences*player.autobuyers.interval
					var a=0
					while (a<14&&occurrences>0) {
						if (!player.transferUpgrades.includes(a+1)) {
							if (player.transferPoints.gte(costs.tupgs[a])) {
								buyTransferUpgrade(a+1)
								occurrences--
							} else {
								occurrences=0
							}
						}
						a++
					}
				}
			}
			if (player.autobuyers.supernova!=undefined?!player.autobuyers.supernova.disabled:false) {
				occurrences=Math.floor((player.playtime-player.autobuyers.supernova.lastTick)/player.autobuyers.interval)
				if (occurrences>0) {
					player.autobuyers.supernova.lastTick+=occurrences*player.autobuyers.interval
					if (Decimal.gte(getPostPrestigePoints(3),player.currentChallenge>0?1:player.autobuyers.supernova.ns)) checkToReset(3)
				}
			}
			if (!tooMuch&&player.autobuyers.prestige!=undefined?!player.autobuyers.prestige.disabled:false) {
				occurrences=Math.floor((player.playtime-player.autobuyers.prestige.lastTick)/player.autobuyers.interval)
				if (occurrences>0) {
					player.autobuyers.prestige.lastTick+=occurrences*player.autobuyers.interval
					if (getPrestigePower().div(player.prestigePower).gte(player.autobuyers.prestige.times)) checkToReset(1)
				}
			}
			if (!tooMuch&&player.autobuyers.transfer!=undefined?!player.autobuyers.transfer.disabled:false) {
				occurrences=Math.floor((player.playtime-player.autobuyers.transfer.lastTick)/player.autobuyers.interval)
				if (occurrences>0) {
					player.autobuyers.transfer.lastTick+=occurrences*player.autobuyers.interval
					if (getTransferPoints().div(player.transferPoints.max(1)).gte(player.autobuyers.transfer.times.sub(1))||getTransferPoints().gte(player.autobuyers.transfer.tp)) checkToReset(2)
				}
			}
			if (!tooMuch&&player.autobuyers.gens!=undefined) {
				occurrences=Math.floor((player.playtime-player.autobuyers.gens.lastTick)/player.autobuyers.interval)
				if (occurrences>0) {
					player.autobuyers.gens.lastTick+=occurrences*player.autobuyers.interval
					for (a=0;a<(player.currentChallenge==3?9:10);a++) {
						var genTier=player.autobuyerPriorities[a]
						if (player.autobuyers.gens.tiers[genTier]!=undefined?player.autobuyers.gens.tiers[genTier]:false) {
							if (player.highestTierPrestiges[0]>genTier-2) if (isWorthIt(genTier)) {
								buyGen(genTier,BigInteger.multiply(occurrences,player.autobuyers.gens.bulk),true)
								player.ach2possible=false
							}
						}
					}
				}
			}
		}
		
		if (player.rewardBoxes[1]>0) {
			player.rewardBoxes[1]=Math.max(player.rewardBoxes[1]-diff,0)
			if (player.rewardBoxes[1]==0) {
				unlockAutobuyer()
			}
		}
			
		if (player.aliens.unlocked) {
			if (player.aliens.amount<60) {
				var occurrences=Math.floor(player.playtime-player.aliens.lastTick)
				player.aliens.lastTick+=occurrences
				player.aliens.progress+=occurrences
				if (player.aliens.progress>99) {
					var alienGain=Math.floor(player.aliens.progress/100)
					player.aliens.progress-=alienGain*100
					player.aliens.amount+=alienGain
					if (player.aliens.amount>59) {
						player.aliens.amount=60
						player.aliens.progress=0
					}
					updateNeutronBoosts()
				}
			}
			totalAliens=player.aliens.amount+player.aliens.kept
		} else {
			totalAliens=player.aliens.amount+player.aliens.kept
		}
	
		notOnShift=1
		if (keysPressed.length>0&&notOnFocus&&player.hotkeys) {
			if (keysPressed.includes(16)) notOnShift=0
			for (a=1;a<11;a++) {
				var keyid=48+(a%10)
				if (keysPressed.includes(keyid)) {
					if (keysPressed.includes(16)) {
						if (isWorthIt(a)) {
							buyGen(a,0,true)
							player.ach2possible=false
						}
					} else if (keysPressed.includes(17)) {
						buyNeutronGen(a)
						keysPressed=[]
					} else {
						if (isWorthIt(a)) {
							buyGen(a,1,true)
							player.ach2possible=false
						}
						keysPressed=[]
					}
				}
			}
			if (keysPressed.includes(68)) {
				if (player.autobuyers.interval!=undefined) {
					var disabled=0
					if (player.autobuyers.upgrade!=undefined) if (player.autobuyers.upgrade.disabled) disabled++
					if (player.autobuyers.transfer!=undefined) if (player.autobuyers.transfer.disabled) disabled++
					if (player.autobuyers.prestige!=undefined) if (player.autobuyers.prestige.disabled) disabled++
					if (player.autobuyers.gens!=undefined) {
						for (a=1;a<11;a++) {
							if (player.autobuyers.gens.tiers[a]!=undefined) if (!player.autobuyers.gens.tiers[a]) disabled++
						}
					}
					if (player.autobuyers.supernova!=undefined) if (player.autobuyers.supernova.disabled) disabled++
					if (disabled==0) {
						if (player.autobuyers.upgrade!=undefined) player.autobuyers.upgrade.disabled=true
						if (player.autobuyers.transfer!=undefined) player.autobuyers.transfer.disabled=true
						if (player.autobuyers.prestige!=undefined) player.autobuyers.prestige.disabled=true
						if (player.autobuyers.gens!=undefined) {
							for (a=1;a<11;a++) {
								if (player.autobuyers.gens.tiers[a]!=undefined) player.autobuyers.gens.tiers[a]=false
							}
						}
						if (player.autobuyers.supernova!=undefined) player.autobuyers.supernova.disabled=true
					} else {
						if (player.autobuyers.upgrade!=undefined) player.autobuyers.upgrade.disabled=false
						if (player.autobuyers.transfer!=undefined) player.autobuyers.transfer.disabled=false
						if (player.autobuyers.prestige!=undefined) player.autobuyers.prestige.disabled=false
						if (player.autobuyers.gens!=undefined) {
							for (a=1;a<11;a++) {
								if (player.autobuyers.gens.tiers[a]!=undefined) player.autobuyers.gens.tiers[a]=true
							}
						}
						if (player.autobuyers.supernova!=undefined) player.autobuyers.supernova.disabled=false
					}
					updateAutobuyers()
				}
				keysPressed=[]
			}
			if (keysPressed.includes(77)) maxAll()
			if (keysPressed.includes(80)) {checkToReset(1);keysPressed=[];}
			if (keysPressed.includes(83)) {checkToReset(3);keysPressed=[];}
			if (keysPressed.includes(84)) {checkToReset(2);keysPressed=[];}
		}
	}
	player.lastUpdate=currentTime
	
	updateElement('stars',tooMuch?'Infinite':format(player.stars))
	if (pps[0].eq(0)||tooMuch) {
		updateElement('sPS',0)
		disableTooltip('sPSExplanation')
	} else {
		updateElement('sPS',format(pps[0],(pps[0].gte(1e3))?2:1,0,false))
		enableTooltip('sPSExplanation')
		updateTooltip('sPSExplanation',(player.explanations?explainList.growthRate+'<br><br>':'')+'Growth rate: '+format(pps[0].div(player.stars).times(100),2,0,false)+'%')
	}
	if (player.prestiges[1]>0||player.transferPoints.gt(0)||player.transferUpgrades.length>0) {
		showElement('transferTabButton',(oldDesign)?'inline-block':'table-cell')
	} else {
		hideElement('transferTabButton')
		if (tab=='transfer') tab='gen'
	}
	if (!oldDesign) {
		var shown=false
		for (i=2;i>=0;i--) {
			if (!shown) {
				if (player.prestiges[i+1]>0) shown=true
				else switch (i) {
					case 0: if (player.transferPoints.gt(0)||player.transferUpgrades.length>0) {shown=true}; break
					case 1: if (player.neutronStars.gt(0)) {shown=true}; break
					case 2: if (player.quarkStars.gt(0)) {shown=true}; break
				}
			}
			if (shown) {
				if (i==0) {
					showElement('prestigePoints','table')
					updateTooltipBase('transferPoints',format(player.transferPoints)+' transfer point'+(player.transferPoints.eq(1)?'':'s'))
				} else if (i==1) {
					showElement('neutronStars','table-cell')
					updateTooltipBase('neutronStars',format(player.neutronStars)+' neutron star'+(player.neutronStars.eq(1)?'':'s'))
				} else {
					showElement('quarkStars','table-cell')
					updateTooltipBase('quarkStars',format(player.quarkStars)+' quark star'+(player.quarkStars.eq(1)?'':'s'))
				}
			} else {
				if (i==0) hideElement('prestigePoints')
				else if (i==1) hideElement('neutronStars')
				else hideElement('quarkStars')
			}
		}
	}
	if (player.prestiges[2]>0||player.neutronStars.gt(0)) {
		showElement('supernovaTabButton',(oldDesign)?'inline-block':'table-cell')
		if (player.supernovaTabsUnlocked==streqs.length) {
			hideElement('requirement'+((oldDesign)?'':'Child'))
		} else {
			showElement('requirement'+((oldDesign)?'':'Child'),(oldDesign)?'table-cell':'inline-block')
			moveElement('requirement'+((oldDesign)?'':'Child'),((player.supernovaTabsUnlocked==3)?'genTabs':'supernovaTabs')+((oldDesign)?'':'Row'))
			updateElement('requirement','Next requires '+format(streqs[player.supernovaTabsUnlocked])+' NS')
			updateClass('requirement',(player.supernovaTabsUnlocked==3)?(oldDesign?'supernovaTabButton':'supernovaLockedTab'):(oldDesign)?'lockedTabButton':'lockedUpgrade')
		}
		for (a=1;a<=streqs.length;a++) {
			if (player.supernovaTabsUnlocked>=a) {
				showElement('supernovaLockedTab'+a,(oldDesign)?'inline-block':'table-cell')
			} else {
				hideElement('supernovaLockedTab'+a)
			}
		}
	} else {
		hideElement('supernovaTabButton')
	}
	if (player.prestiges[3]>0||player.quarkStars.gt(0)) {
		showElement('hypernovaTabButton',(oldDesign)?'inline-block':'table-cell')
	} else {
		hideElement('hypernovaTabButton')
	}
	if (player.prestiges[4]>0||player.particles.gt(0)) {
		showElement('exoticTabButton',(oldDesign)?'inline-block':'table-cell')
	} else {
		hideElement('exoticTabButton')
	}
	if (player.prestiges[5]>0||player.strings.gt(0)) {
		showElement('quantumTabButton',(oldDesign)?'inline-block':'table-cell')
	} else {
		hideElement('quantumTabButton')
	}
	
	if (tab!=oldTab) {
		showElement('tab'+tab,'block')
		hideElement('tab'+oldTab)
		oldTab=tab
	}
	if (showTooMuch!=showedTooMuch) {
		showedTooMuch=showTooMuch
		if (showedTooMuch) {
			showElement('tooMuch','inline-block')
			setTimeout(function(){if (showedTooMuch) document.getElementById('tooMuch').style.opacity=1},50)
		}
		else {
			document.getElementById('tooMuch').style.opacity=0
			setTimeout(function(){hideElement('tooMuch')},500)
		}
	}
	if (showTooMuch) {
		if (tooMuch) {
			updateElement('tooMuchMessage','The universe has been destroyed due to too much stars.')
			hideElement('notNow')
		} else {
			updateElement('tooMuchMessage','You can destroy your stars now and gain your neutron stars. If you reach too much stars, you must to.')
			showElement('notNow','table-cell')
		}
	}
	if (showTooMuch2!=showedTooMuch2) {
		showedTooMuch2=showTooMuch2
		if (showedTooMuch2) {
			showElement('tooMuch2','inline-block')
			setTimeout(function(){if (showedTooMuch2) document.getElementById('tooMuch2').style.opacity=1},50)
		} else {
			document.getElementById('tooMuch2').style.opacity=0
			setTimeout(function(){hideElement('tooMuch2')},500)
		}
	}
	if (!oldDesign&&player.layout!=oldLayout) {
		showElement('layout'+player.layout,'table')
		hideElement('layout'+oldLayout)
		oldLayout=player.layout
	}
	if (player.stars.gte(Number.MAX_VALUE)&&!showTooMuch) {
		if (oldDesign) {
			showElement('prestige3bl','inline')
		} else {
			showElement('prestige3bl','table-cell')
		}
		updateElement('prestige3bl','Explode your stars and get undead stars.<br>+'+format(getPostPrestigePoints(3))+' NS')
		enableTooltip('p3tt')
		updateTooltip('p3tt',(player.explanations?explainList.supernova+'<br>':'')+'NS gain rate: '+format(gainRate[1],2,0,false)+' NS/s<br>Peak: '+format(player.gainPeak[1],2,0,false)+' NS/s')
	} else {
		disableTooltip('p3tt')
		hideElement('prestige3bl')
	}
	
	if (tab=='gen') {
		if (player.supernovaTabsUnlocked>2) {
			showElement('genTabs','block')
		} else {
			hideElement('genTabs')
		}
		
		if (genTab!=oldGenTab) {
			showElement('gen'+genTab,'block')
			hideElement('gen'+oldGenTab)
			oldGenTab=genTab
		}
		if (genTab=='tiers') {
			for (a=0;a<10;a++) {
				var showGenerator=true
				if (!oldDesign) {
					if (a>0&&player.layout==1) {
						if (player.highestTierPrestiges[0]>=a&&(a<9||player.currentChallenge!=3)) {
							showElement('t'+(a+1)+'GenRow','table-row')
						} else {
							hideElement('t'+(a+1)+'GenRow')
							showGenerator=false
						}
					}
					if (a>0&&player.layout==2) {
						if (player.highestTierPrestiges[0]>=a&&(a<9||player.currentChallenge!=3)) {
							visibleElement('t'+(a+1)+'GenCell')
							visibleElement('t'+(a+1)+'GenCell2')
						} else {
							invisibleElement('t'+(a+1)+'GenCell')
							invisibleElement('t'+(a+1)+'GenCell2')
							showGenerator=false
						}
					}
				}
				if (showGenerator) {
					var name='t'+(a+1)+'Gen'+((player.layout==2&&!oldDesign)?'2':'')
					var currentText='<b>Tier '+(a+1)+' generator</b><br>'
					var tooltipText=''
					if (player.explanations) tooltipText=explainList.gens
					if (player.currentChallenge==5&&player.highestTierPrestiges[0]>a) {
						currentText=currentText+format(player.generators[a].amount,0,1)+' (x'+format(getGeneratorMultiplier(a,false),2,0,false)+')'
					} else if (player.generators[a].amount.eq(player.generators[a].bought)||a==player.highestTierPrestiges[0]-1||player.currentChallenge==5) {
						currentText=currentText+format(player.generators[a].amount,0,1)
					} else {
						currentText=currentText+format(player.generators[a].amount)+' ('+format(pps[a+1],2,0,false)+'/s), '+format(player.generators[a].bought,2,1)+' bought'
						tooltipText=(tooltipText==''?'':tooltipText+'<br>')+'Growth rate: '+format(pps[a+1].div(player.generators[a].amount).times(100),2,0,false)+'%'
						tooltipText=(tooltipText==''?'':tooltipText+'<br>')+'Production for 1 generator: '+format(ppsSingles[a],2,0,false)+'/s'
					}
					if (tooltipText=='') disableTooltip('t'+(a+1)+'Gen'+((player.layout==2&&!oldDesign)?'2':''))
					else {
						enableTooltip('t'+(a+1)+'Gen'+((player.layout==2&&!oldDesign)?'2':''))
						updateTooltip('t'+(a+1)+'Gen'+((player.layout==2&&!oldDesign)?'2':''),tooltipText)
					}
					var lastLine=''
					var cost=costs.tiers[a]
					if (keysPressed.includes(16)&&player.highestTierPrestiges[0]>=a&&player.stars.gte(cost)&&player.currentChallenge!=14) {
						var multiplier=getCostMultiplier(a+1)
						var resource=(player.currentChallenge==4&&a>0)?player.generators[a-1].amount:player.stars
						var maxBulk=resource.div(cost).times(multiplier-1).plus(1).max(1).log(multiplier)
						if (Decimal.lte(maxBulk,9007199254740992)) maxBulk=Math.floor(maxBulk)
						lastLine='Buy '+format(maxBulk,2,1)
						if (Decimal.lte(maxBulk,1000)) lastLine=lastLine+' (x'+format(Decimal.pow(multiplier,maxBulk).sub(1).div(multiplier-1),2,0,false)+')'
					} else if (a>player.highestTierPrestiges[0]) {
						lastLine='Cost: ???'
					} else {
						lastLine='Cost: '+formatCosts(cost)
					}
					if (oldDesign) {
						updateElement(name,currentText+'<br>'+lastLine)
					} else {
						updateTooltipBase(name,currentText)
						var name='t'+(a+1)+'GenButton'+((player.layout==2)?'2':'')
						updateElement(name,lastLine)
					}
					if (player.highestTierPrestiges[0]>=a&&isWorthIt(a+1)) {
						if (oldDesign) {
							updateClass(name,'shopButton')
						} else {
							updateClass(name,'longButton')
						}
					} else {
						updateClass(name,'shopUnafford')
					}
				}
			}
			if (player.prestigePower.gt(1)) {
				updateTooltipBase('prestigePower','<b>x'+format(player.prestigePower,3,0,false)+'</b> (prestige power) for all production<br>')
				if (player.explanations) {
					enableTooltip('prestigePower')
					updateTooltip('prestigePower',explainList.prestige)
				} else {
					disableTooltip('prestigePower')
				}
			} else {
				updateTooltipBase('prestigePower','')
			}
			if (!showTooMuch&&player.stars.gte(player.transferUpgrades.includes(7)?1e38:1e39)&&player.prestigePower.lt(getPrestigePower())) {
				if (oldDesign) {
					showElement('prestige1','inline')
				} else {
					showElement('p1row','table-cell')
				}
				var gpp=getPrestigePower()
				var multi=gpp.div(player.prestigePower)
				updateElement('prestige1','Reset this game and get the boost.<br>x'+format(multi,3,0,false)+' production')
				enableTooltip('p1tt')
				updateTooltip('p1tt',(player.explanations?explainList.prestige+'<br>':'')+'Total multiplier for next prestige: x'+format(gpp,3,0,false)+'<br>Growth rate: '+format(multi.root(player.prestigePlaytime).sub(1).times(100),2,0,false)+'%')
				if (oldDesign) {
					hideElement('losereset')
				} else {
					hideElement('lrrow')
				}
				disableTooltip('lrtt')
			} else {
				if (oldDesign) {
					hideElement('prestige1')
				} else {
					hideElement('p1row')
				}
				disableTooltip('p1tt')
				if (!showTooMuch&&(player.currentChallenge==8||player.currentChallenge==13)) {
					if (oldDesign) {
						showElement('losereset','inline')
					} else {
						showElement('lrrow','table-cell')
					}
					enableTooltip('lrtt')
					updateTooltip('lrtt','While losing a reset, you will have half of prestige power.<br>x'+format(player.prestigePower,3,0,false)+' -> x'+format(player.prestigePower.div(2).max(1),3,0,false))
				} else {
					if (oldDesign) {
						hideElement('losereset')
					} else {
						hideElement('lrrow')
					}
					disableTooltip('lrtt')
				}
			}
			if (!showTooMuch&&player.prestigePower.gte(100)) {
				if (oldDesign) {
					showElement('prestige2','inline')
				} else {
					showElement('p2row','table-cell')
				}
				updateElement('prestige2','Transfer your power and upgrade this game.<br>+'+format(getTransferPoints())+' TP')
				enableTooltip('p2tt')
				updateTooltip('p2tt',(player.explanations?explainList.transfer+'<br>':'')+'TP gain rate: '+format(gainRate[0])+' TP/s<br>Peak: '+format(player.gainPeak[0])+' TP/s')
			} else {
				if (oldDesign) {
					hideElement('prestige2')
				} else {
					hideElement('p2row')
				}
				disableTooltip('p2tt')
			}
			if (((player.currentChallenge==8||player.currentChallenge==13)&&player.generators[0].amount.gt(0))||player.currentChallenge==11) {
				showElement('challPow','block')
				updateElement('challPow','Challenge '+player.currentChallenge+' power: <b>x'+format(player.challPow,3,0,false)+'</b>')
			} else {
				hideElement('challPow')
			}
			if (!showTooMuch&&player.showProgress&&(player.stars.lt(player.transferUpgrades.includes(7)?1e38:1e39)||player.prestigePower.gt(getPrestigePower()))) {
				var pp=player.prestigePower.log10()
				var gpp=getPrestigePower()
				var gppLog=gpp.log10()
				var gpp10=getPrestigePower(10).log10()
				if (Decimal.gt(pp,0)) {
					var percentage=Decimal.sub(gppLog,gpp10).div(Decimal.sub(pp,gpp10))
				} else {
					var percentage=player.stars.add(1).log10()/(player.transferUpgrades.includes(7)?38:39)
				}
				showElement('prestigeProgress','block')
				if (Decimal.gte(percentage,0.9995)&&Decimal.gte(pp,500)) {
					updateElement('prestigeProgress','<b>Progress till prestige</b>: '+format(Decimal.add(player.prestigePower.div(gpp).log10(),0.01),2,0,false)+' OoM left')
				} else {
					updateElement('prestigeProgress','<b>Progress till prestige</b>: '+Decimal.times(percentage,100).toFixed(2)+'%')
				}
			} else {
				hideElement('prestigeProgress')
			}
			if (!showTooMuch&&player.showProgress&&player.prestigePower.lt(100)) {
				showElement('transferProgress','block')
				updateElement('transferProgress','<b>Progress till transfer</b>: '+Math.floor(player.prestigePower.log10()*5000)/100+'%')
			} else {
				hideElement('transferProgress')
			}
			if (!showTooMuch&&player.showProgress&&player.stars.lt((player.currentChallenge>0||player.breakLimit)?Number.MAX_VALUE:'2.28868105e362')) {
				showElement('supernovaProgress','block')
				if (player.stars.gt(Number.MAX_VALUE)) updateElement('supernovaProgress','<b>Progress before forced to do</b>: '+Math.floor(player.stars.add(1).log10()/362.3595852737246*10000)/100+'%')
				else updateElement('supernovaProgress','<b>Progress till '+((player.currentChallenge>0)?'challenge goal':'supernova')+'</b>: '+Math.floor(player.stars.add(1).log10()/Math.log10(Number.MAX_VALUE)*10000)/100+'%')
			} else {
				hideElement('supernovaProgress')
			}
			if (!showTooMuch&&player.showProgress&&player.breakLimit&&player.neutronStars.lt(Number.MAX_VALUE)) {
				showElement('hypernovaProgress','block')
				updateElement('hypernovaProgress','<b>Progress till hypernova</b>: '+Math.floor(player.neutronStars.add(1).log10()/Math.log10(Number.MAX_VALUE)*10000)/100+'%')
			} else {
				hideElement('hypernovaProgress')
			}
		}
		if (genTab=='neutronTiers') {
			updateElement('neutrons','You have <b>'+format(player.neutrons)+'</b> neutrons which reduced the cost by <b>'+format(neutronPower)+'x</b>')
			var nPS=getNeutronTierMultiplier(0).times(player.neutronTiers[0].amount)
			if (nPS.eq(0)) {
				updateElement('neutronsRate','<b>0</b> neutrons/s')
			} else {
				updateElement('neutronsRate','<b>'+format(getNeutronTierMultiplier(0).times(player.neutronTiers[0].amount))+'</b> neutrons/s ('+format(nPS.div(player.neutrons),2,0,false)+'%)')
			}
			for (a=0;a<10;a++) {
				var currentText='<b>Neutron tier '+(a+1)+' generator</b><br>'
				if (player.neutronTiers[a].amount.eq(player.neutronTiers[a].bought)||a==9) {
					currentText=currentText+format(player.neutronTiers[a].amount,0,1)
				} else {
					currentText=currentText+format(player.neutronTiers[a].amount)+' ('+format(getNeutronTierMultiplier(a+1).times(player.neutronTiers[a+1].amount))+'/s), '+format(player.neutronTiers[a].bought,2,1)+' bought'
				}
				var name='nt'+(a+1)+'Gen'
				var lastLine='Cost: '+formatNSCosts(costs.neutronTiers[a])
				if (oldDesign) {
					updateElement(name+'Button',currentText+'<br>'+lastLine)
				} else {
					updateTooltipBase(name,currentText)
					updateElement(name+'Button',lastLine)
				}
				var tooltipText=''
				if (player.explanations) tooltipText=explainList.neutronTiers
				if (a==9||player.neutronTiers[a].amount.eq(player.neutronTiers[a].bought)) {
					currentText=currentText+format(player.neutronTiers[a].amount,0,1)
				} else {
					currentText=currentText+format(player.neutronTiers[a].amount)+' ('+format(getNeutronTierMultiplier(a+1).times(player.neutronTiers[a+1].amount))+'/s), '+format(player.neutronTiers[a].bought,2,1)+' bought'
					tooltipText=(tooltipText==''?'':tooltipText+'<br>')+'Growth rate: '+format(getNeutronTierMultiplier(a+1).times(player.neutronTiers[a+1].amount).div(player.neutronTiers[a].amount).times(100),2,0,false)+'%'
				}
				var genMultiplier=getNeutronTierMultiplier(a)
				if (genMultiplier.gt(1)) tooltipText=(tooltipText==''?'':tooltipText+'<br>')+'Production for 1 generator: '+format(genMultiplier,2,0,false)+'/s'
				if (tooltipText=='') disableTooltip('nt'+(a+1)+'Gen')
				else {
					enableTooltip('nt'+(a+1)+'Gen')
					updateTooltip('nt'+(a+1)+'Gen',tooltipText)
				}
				if (player.neutronStars.gte(costs.neutronTiers[a])) {
					updateClass('nt'+(a+1)+'GenButton',(oldDesign)?'supernovaUpgrade':'supernovaButton')
				} else {
					updateClass('nt'+(a+1)+'GenButton','shopUnafford')
				}
			}
		}
	}
	if (tab=='statistics') {
		var displayType=(oldDesign)?'block':'table-row'
		if (oldDesign) {
			updateElement('statsPlaytime','You have played for '+formatTime(player.playtime)+'.')
		} else {
			updateElement('statsPlaytimeValue',formatTime(player.playtime))
		}
		if (player.updateRate==Math.round(1000/tickspeed)) {
			hideElement('statsTPS')
		} else {
			showElement('statsTPS',displayType)
			if (oldDesign) {
				updateElement('statsTPS','You are running this game in '+format(1000/tickspeed,0,1)+' ticks per second.')
			} else {
				updateElement('statsTPSValue',format(1000/tickspeed,0,1))
			}
		}
		if (oldDesign) {
			updateElement('statsTotal','You have gained '+format(player.totalStars)+' stars in total.')
		} else {
			updateElement('statsTotalValue',format(player.totalStars))
		}
		var shown=false
		if (player.totalNeutrons.gt(0)||shown) {
			shown=true
			
			showElement('statsTotalNeutrons',displayType)
			if (oldDesign) {
				updateElement('statsTotalNeutrons','You have gained '+format(player.totalNeutrons)+' neutrons in total.')
			} else {
				updateElement('statsTotalNeutronsValue',format(player.totalNeutrons))
			}
		} else {
			hideElement('statsTotalNeutrons')
		}
		if ((player.rewardBoxes[2]>0&&(!oldDesign||player.rewardBoxes[2]<12))||shown) {
			shown=true
			
			showElement('statsRewardBoxes',displayType)
			if (oldDesign) {
				updateElement('statsRewardBoxes','You opened '+player.rewardBoxes[2]+' reward box'+(player.rewardBoxes[2]==1?'':'es')+'.')
			} else {
				updateElement('statsRewardBoxesValue',player.rewardBoxes[2])
			}
		} else {
			hideElement('statsRewardBoxes')
		}
		if (player.prestiges[2]>0||shown) {
			shown=true
			
			showElement('statsSupernova',displayType)
			showElement('statsSupernovaTime',displayType)
			showElement('statsSupernovaFastest',displayType)
			showElement('statsNS',displayType)
			if (oldDesign) {
				updateElement('statsSupernova','You have supernova\'d your stars '+format(player.prestiges[2],2,2)+' times.')
				updateElement('statsSupernovaTime','Your time in this supernova is '+formatTime(player.supernovaPlaytime)+'.')
				updateElement('statsSupernovaFastest','Your fastest supernova is in '+formatTime(player.fastestSupernova)+'.')
				updateElement('statsNS','You have gained '+format(player.totalNS)+' neutron stars in total.')
			} else {
				updateElement('statsSupernovaValue',format(player.prestiges[2],2,2))
				updateElement('statsSupernovaTimeValue',formatTime(player.supernovaPlaytime))
				updateElement('statsSupernovaFastestValue',formatTime(player.fastestSupernova))
				updateElement('statsNSValue',format(player.totalNS))
			}
		} else {
			hideElement('statsSupernova')
			hideElement('statsSupernovaTime')
			hideElement('statsSupernovaFastest')
			hideElement('statsNS')
		}
		for (a=0;a<10;a++) {
			if (player.lastSupernovas[a]==undefined||!shown) {
				hideElement('statsPrevSupernova'+(a+1))
			} else {
				showElement('statsPrevSupernova'+(a+1),displayType)
				var message=''
				if (oldDesign) message='The '+((a>0)?ordinals[a]+' ':'')+'previous supernova took '
				if (player.lastSupernovas[a][3]>1) {
					message=message+format(player.lastSupernovas[a][3]-1,0,2)+' supernovas and '
				}
				message=message+formatTime(player.lastSupernovas[a][0])
				if (player.lastSupernovas[a][2].gt(1)) {
					if (oldDesign) message=message+' with '+format(player.lastSupernovas[a][1])+' stars and earned '+format(player.lastSupernovas[a][2])+' NS. ('+format(player.lastSupernovas[a][2].div(player.lastSupernovas[a][0]),2,0,false)+' NS/s)'
					else message=message+'<br>('+format(player.lastSupernovas[a][1])+' stars, +'+format(player.lastSupernovas[a][2])+' NS; '+format(player.lastSupernovas[a][2].div(player.lastSupernovas[a][0]),2,0,false)+' NS/s)'
				} else if (oldDesign) {
					message=message+'.'
				}
				updateElement('statsPrevSupernova'+(a+1)+(oldDesign?'':'Value'),message)
			}
		}
		if (player.prestiges[1]>0||shown) {
			shown=true
			
			showElement('statsTransfer',displayType)
			showElement('statsTransferTime',displayType)
			showElement('statsTP',displayType)
			showElement('statsTPPeak',displayType)
			if (oldDesign) {
				updateElement('statsTransfer','You have transferred '+format(player.prestiges[1],2,2)+' times.')
				updateElement('statsTransferTime','Your time in this transfer is '+formatTime(player.transferPlaytime)+'.')
				updateElement('statsTP','You have gained '+format(player.totalTP)+' transfer points in total.')
				updateElement('statsTPPeak','Your highest amount of transfer points you got is '+format(player.prestigePeak[1])+' TP.')
			} else {
				updateElement('statsTransferValue',format(player.prestiges[1],2,2))
				updateElement('statsTransferTimeValue',formatTime(player.transferPlaytime))
				updateElement('statsTPValue',format(player.totalTP))
				updateElement('statsTPPeakValue',format(player.prestigePeak[1]))
			}
		} else {
			hideElement('statsTransfer')
			hideElement('statsTransferTime')
			hideElement('statsTP')
			hideElement('statsTPPeak')
		}
		if (player.prestiges[0]>0||shown) {
			showElement('statsPrestige',displayType)
			showElement('statsPP',displayType)
			if (oldDesign) {
				updateElement('statsPrestige','You have prestige '+format(player.prestiges[0],2,2)+' times.')
				updateElement('statsPP','Your highest prestige power ever got is x'+format(player.prestigePeak[0],3,0,true)+'.')
			} else {
				updateElement('statsPrestigeValue',format(player.prestiges[0],2,2))
				updateElement('statsPPValue','x'+format(player.prestigePeak[0],3,0,true))
			}
		} else {
			hideElement('statsPrestige')
			hideElement('statsPP')
		}
	}
	if (tab=='options') {
		updateElement('notationOption','Notation:<br>'+player.notation)
		if (player.updateRate==Number.MAX_VALUE) {
			updateElement('urOption','Update rate:<br>Unlimited')
		} else {
			updateElement('urOption','Update rate:<br>'+player.updateRate+' TPS')
		}
		updateElement('exOption','Explanations:<br>'+(player.explanations?'On':'Off'))
		updateElement('msOption','Use monospaced:<br>'+(player.useMonospaced?'On':'Off'))
		updateElement('opOption','Online progress:<br>'+(player.offlineProgress?'On':'Off'))
		updateElement('hkOption','Hotkeys:<br>'+(player.hotkeys?'On':'Off'))
		updateElement('spOption','Show progress:<br>'+(player.showProgress?'On':'Off'))
		if (player.supernovaUpgrades.includes(2)||player.supernovaUpgrades.includes(3)) {
			showElement('hsOptionC','table-cell')
			updateElement('hsOption','Headstarts:<br>'+(player.headstarts?'On':'Off'))
		} else {
			hideElement('hsOptionC')
		}
		if (player.supernovaTabsUnlocked>1) {
			showElement('ccOptionC','table-cell')
			updateElement('ccOption','Challenge confirmation:<br>'+(player.challConfirm?'On':'Off'))
		} else {
			hideElement('ccOptionC')
		}
		if (player.supernovaTabsUnlocked>3) {
			if (!oldDesign) showElement('modrow','block')
			showElement('blOptionC','table-cell')
			showElement('psOptionC','table-cell')
			updateElement('blOption',(player.breakLimit?'Fix':'Break')+' limit')
			updateElement('psOption','Pre-supernova mode:<br>'+(player.preSupernova?'On':'Off'))
		} else {
			if (!oldDesign) hideElement('modrow')
			hideElement('blOptionC')
			hideElement('psOptionC')
		}
		if (!oldDesign) {
			updateElement('stOption','Theme:<br>'+player.theme)
			updateElement('slOption','Layout (generators):<br>Two '+(player.layout==1?'columns':'rows'))
		}
	} else {
		hideElement('exportSave')
	}
	if (tab=='transfer') {
		if (oldDesign) updateTooltipBase('transferPoints','You have <b>'+format(player.transferPoints)+'</b> transfer point'+(player.transferPoints.eq(1)?'':'s'))
		explainList.tupg7='<b>Transfer upgrade <span style="font-size:66.6%">#7</span></b><br>This upgrade lets you prestige at '+format(1e38)+' stars.<br>Prestige power gain was changed too if you buy this upgrade.'
		updateElement('tupg13button',((oldDesign)?'Increase prestige power gain based on transfer points<br>':'')+'Cost: '+format(1000)+' TP')
		updateElement('tupg14button',((oldDesign)?'Increase transfer point gain based on prestige power<br>':'')+'Cost: '+format(3000)+' TP')
		for (a=1;a<15;a++) {
			var tooltipText=''
			if (player.explanations) tooltipText=explainList['tupg'+a]
			if (player.transferUpgrades.includes(a)) {
				var mult=getUpgradeMultiplier('tupg'+a)
				if (mult!=undefined) tooltipText=(tooltipText==''?'':tooltipText+'<br>')+'Current multiplier: '+format(mult)+'x'
			}
			if (tooltipText=='') {
				disableTooltip('tupg'+a)
			} else {
				enableTooltip('tupg'+a)
				updateTooltip('tupg'+a,tooltipText)
			}
			if (player.transferUpgrades.includes(a)) {
				updateClass('tupg'+a+'button','boughtUpgrade')
			} else if (a>12&&player.transferUpgrades.length<12) {
				updateClass('tupg'+a+'button','lockedUpgrade')
			} else if (player.transferPoints.gte(costs.tupgs[a-1])) {
				updateClass('tupg'+a+'button',(oldDesign)?'upgradeButton':'longButton')
			} else {
				updateClass('tupg'+a+'button',(oldDesign)?'unaffordUpgrade':'shopUnafford')
			}
		}
	}
	if (tab=='supernova') {
		if (oldDesign) updateTooltipBase('neutronStars','You have <b>'+format(player.neutronStars)+'</b> neutron star'+(player.neutronStars.eq(1)?'':'s'))
		if (player.supernovaUpgrades.length>19) {
			updateClass('supernovaUpgradesTabButton',(oldDesign)?'completeTabButton':'boughtUpgrade')
		} else {
			updateClass('supernovaUpgradesTabButton',(oldDesign)?'supernovaTabButton':'longButton')
		}
		if (player.supernovaTabsUnlocked>0) {
			if (player.buyinshopFeatures.length>5) {
				if (oldDesign) updateClass('supernovaLockedTab2','completeTabButton')
				else updateClass('buyinshopTabButton','boughtUpgrade')
			} else {
				if (oldDesign) updateClass('supernovaLockedTab2','supernovaTabButton')
				else updateClass('buyinshopTabButton','longButton')
			}
		}
		if (player.supernovaTabsUnlocked>2) {
			if (player.neutronBoosts.powers[0]==20&&player.neutronBoosts.powers[1]==20&&player.neutronBoosts.powers[2]==30&&player.neutronBoosts.basePower==10&&player.neutronBoosts.ppPower==0.15) {
				if (oldDesign) updateClass('supernovaLockedTab3','completeTabButton')
				else updateClass('neutronBoostTabButton','boughtUpgrade')
			} else {
				if (oldDesign) updateClass('supernovaLockedTab3','supernovaTabButton')
				else updateClass('neutronBoostTabButton','evenButton')
			}
		}
		if (SNTab!=oldSNTab) {
			showElement('supernova'+SNTab,'block')
			hideElement('supernova'+oldSNTab)
			oldSNTab=SNTab
		}
		if (SNTab=='upgrades') {
			if (player.supernovaUpgrades.includes(2)||player.supernovaUpgrades.includes(3)) {
				showElement('headstart','inline-block')
				updateElement('headstart','Headstarts:<br>'+(player.headstarts?'On':'Off'))
			} else {
				hideElement('headstart')
			}
			var disabledUpgrades=[2,3,6,7,8,9,11,12,14]
			for (a=1;a<(player.secondSetUnlocked?21:17);a++) {
				var tooltipText=''
				if (player.explanations) tooltipText=explainList['snupg'+a]
				if (player.supernovaUpgrades.includes(a)) {
					var mult=getUpgradeMultiplier('snupg'+a)
					if (mult!=undefined) tooltipText=(tooltipText==''?'':tooltipText+'<br>')+'Current multiplier: '+format(mult)+'x'
				}
				if (tooltipText=='') {
					disableTooltip('snupg'+a)
				} else {
					enableTooltip('snupg'+a)
					updateTooltip('snupg'+a,tooltipText)
				}
				if (player.supernovaUpgrades.includes(a)) {
					if (disabledUpgrades.includes(a)&&player.currentChallenge>0) {
						updateClass('snupg'+a+'button','lockedUpgrade')
					} else {
						updateClass('snupg'+a+'button','boughtUpgrade')
					}
				} else if (player.neutronStars.gte(costs.snupgs[a-1])) {
					updateClass('snupg'+a+'button',(oldDesign)?'supernovaUpgrade':'supernovaButton')
				} else {
					updateClass('snupg'+a+'button',(oldDesign)?'unaffordUpgrade':'shopUnafford')
				}
			}
			if (player.secondSetUnlocked) {
				showElement('snupgrow5','table-row')
				showElement('snupgrow6','table-row')
				showElement('snupgrow7','table-row')
				updateElement('snupg17button',(oldDesign?'Production multiplier per bought neutron tier 1 generator is 10x<br>':'')+'Cost: '+formatNSCosts(1e35))
				updateElement('snupg18button',(oldDesign?'Neutron tier 2 generator production increase over neutrons<br>':'')+'Cost: '+formatNSCosts(1e40))
				updateElement('snupg19button',(oldDesign?'Neutron tier 3 generator production increase over your bought eighth neutron tier generators<br>':'')+'Cost: '+formatNSCosts(1e50))
				updateElement('snupg20button',(oldDesign?'Neutron tier 4 generator production increase over prestige power<br>':'')+'Cost: '+formatNSCosts(1e75))
				updateElement('snupg21button',(oldDesign?'Neutron tier 5 generator production increase<br>':'')+'Cost: '+formatNSCosts(1e100))
				updateElement('snupg22button',(oldDesign?'Neutron tier 6 generator production increase<br>':'')+'Cost: '+formatNSCosts(1e115))
				updateElement('snupg23button',(oldDesign?'Neutron tier 7 generator production increase<br>':'')+'Cost: '+formatNSCosts(1e130))
				updateElement('snupg24button',(oldDesign?'Neutron tier 8 generator production increase<br>':'')+'Cost: '+formatNSCosts(1e145))
				updateElement('snupg25button',(oldDesign?'Neutron tier 9 generator production increase<br>':'')+'Cost: '+formatNSCosts(1e160))
				updateElement('snupg26button',(oldDesign?'Neutron tier 10 generator production increase<br>':'')+'Cost: '+formatNSCosts(1e175))
			} else {
				hideElement('snupgrow5')
				hideElement('snupgrow6')
				hideElement('snupgrow7')
			}
			if (player.neutronStars.gte(1e45)) player.secondSetUnlocked=true
			if (!player.secondSetUnlocked&&player.supernovaTabsUnlocked>3) {
				showElement('nextSet','inline-block')
				updateElement('nextSet','Next upgrades unlock at: '+formatNSCosts(1e45)+'.')
			} else {
				hideElement('nextSet')
			}
		}
		if (SNTab=='challenges') {
			if (player.challengeUnlocked<12) {
				showElement('nextChall','inline-block')
				updateElement('nextChall','Next challenge unlock at '+format(challreqs[player.challengeUnlocked])+' NS')
			} else {
				hideElement('nextChall')
			}
			if (player.currentChallenge==0) {
				hideElement('exitChall')
			} else {
				showElement('exitChall','inline-block')
			}
			for (a=1;a<13;a++) {
				if (a>player.challengeUnlocked) {
					hideElement('chall'+a)
				} else {
					showElement('chall'+a,'table-cell')
					var timesCompleted=(player.challengesCompleted[a]==undefined)?0:player.challengesCompleted[a]
					if (player.currentChallenge==a) {
						updateElement('chall'+a+'button','Running')
						updateClass('chall'+a+'button',(oldDesign)?'challRunning':'shopUnafford')
					} else if (timesCompleted>0) {
						updateElement('chall'+a+'button','Completed')
						updateClass('chall'+a+'button',(oldDesign)?'challCompleted':'boughtUpgrade')
					} else {
						updateElement('chall'+a+'button','Start')
						updateClass('chall'+a+'button',(oldDesign)?'tabButton':'longButton')
					}
					updateElement('chall'+a+'comp',(timesCompleted==0)?'':'Completed '+format(timesCompleted)+' time'+((timesCompleted==1)?'':'s'))
				}
			}
		}
		if (SNTab=='autobuyers') {
			var currentText='Interval: '+formatTime(player.autobuyers.interval)+'<br>'
			updateElement((oldDesign)?'intReduceCost':'interval',currentText)
			if (!oldDesign) currentText=''
			if (player.autobuyers.interval>0.05||oldDesign) {
				if (!oldDesign) showElement('intervalReduction','block')
				updateElement('intReduceCost',currentText+((player.autobuyers.interval==0.05)?'':((oldDesign)?'Reduce the interval by 20%<br>':'')+'Cost: '+formatNSCosts(costs.intReduceCost)))
				if (player.autobuyers.interval==0.05) {
					updateClass('intReduceCost','boughtUpgrade')
				} else if (player.neutronStars.gte(costs.intReduceCost)) {
					updateClass('intReduceCost',(oldDesign)?'supernovaUpgrade':'supernovaButton')
				} else {
					updateClass('intReduceCost',(oldDesign)?'unaffordUpgrade':'shopUnafford')
				}
			} else {
				if (!oldDesign) hideElement('intervalReduction',currentText)
			}
			if (player.rewardBoxes[0]>0) {
				showElement('rewardBoxes','inline-block')
				currentText='You have <b>'+player.rewardBoxes[0]+'</b> unopened reward boxes'+((oldDesign)?'<br><br>':'')
				updateElement((oldDesign)?'openRewardBox':'rewardBoxAmount',currentText)
				if (!oldDesign) currentText=''
				if (player.rewardBoxes[1]>0) {
					updateClass('openRewardBox',(oldDesign)?'unaffordUpgrade':'shopUnafford')
					updateElement('openRewardBox',currentText+'Opening in '+formatTime(player.rewardBoxes[1]))
				} else {
					updateClass('openRewardBox',(oldDesign)?'supernovaUpgrade':'supernovaButton')
					updateElement('openRewardBox',currentText+'Open')
				}
			} else {
				hideElement('rewardBoxes')
			}
			if (player.autobuyers.transfer==undefined) {
				hideElement('autotransfer')
			} else {
				showElement('autotransfer','table-cell')
			}
			if (player.autobuyers.prestige==undefined) {
				hideElement('autoprestige')
			} else {
				showElement('autoprestige','table-cell')
			}
			if (player.autobuyers.gens==undefined) {
				hideElement('autogenerator')
			} else {
				showElement('autogenerator','table-cell')
			}
			if (player.buyinshopFeatures.includes(1)) {
				showElement('bisBulkBuy','table-cell')
				currentText='Bulk: '+format(player.autobuyers.gens.bulk)+'x<br>'
				updateElement((oldDesign)?'bbIncreaseCost':'bulkBuy',currentText)
				if (!oldDesign) currentText=''
				if (player.autobuyers.gens.bulk==256&&!player.breakLimit) {
					hideElement('bulkBuyIncrease')
				} else {
					showElement('bulkBuyIncrease','block')
					updateElement('bbIncreaseCost',currentText+((player.autobuyers.gens.bulk==256&&!player.breakLimit)?'':((oldDesign)?'Increase the bulk by 2x.<br>':'')+'Cost: '+formatNSCosts(costs.bbCost)))
					if (player.neutronStars.gte(costs.bbCost)) {
						updateClass('bbIncreaseCost',(oldDesign)?'supernovaUpgrade':'supernovaButton')
					} else {
						updateClass('bbIncreaseCost',(oldDesign)?'unaffordUpgrade':'shopUnafford')
					}
				}
			} else {
				hideElement('bisBulkBuy')
			}
			if (player.buyinshopFeatures.includes(2)) {
				showElement('bisPriorities','table-cell')
			} else {
				hideElement('bisPriorities')
			}
			if (player.buyinshopFeatures.includes(3)) {
				visibleElement('bisPrestigeOptions')
			} else {
				invisibleElement('bisPrestigeOptions')
			}
			if (player.buyinshopFeatures.includes(4)) {
				visibleElement('bisTransferOptions')
			} else {
				invisibleElement('bisTransferOptions')
			}
			if (player.buyinshopFeatures.includes(5)) {
				visibleElement('bisTransferOptions2')
			} else {
				invisibleElement('bisTransferOptions2')
			}
			if (player.buyinshopFeatures.includes(6)) {
				showElement('autonova','table-cell')
			} else {
				hideElement('autonova')
			}
		}
		if (SNTab=='buyinshop') {
			var descriptions={1:'Autogenerator bulk buy',2:'Autogenerator priorities',3:'Autoprestige options',4:'Autotransfer options',5:'Autotransfer options II',6:'Autonova'}
			var odbrValues={1:2,2:2,3:2,4:2,5:2,6:2}
			for (a in descriptions) {
				updateElement('bisfeature'+a+'button',((oldDesign)?descriptions[a]+'<br>'.repeat(odbrValues[a]):'')+'Cost: '+formatNSCosts(costs.bisfeatures[a-1]))
			}
			for (a=1;a<7;a++) {
				if (player.explanations) {
					enableTooltip('bisfeature'+a)
					updateTooltip('bisfeature'+a,explainList['bisfeature'+a])
				} else {
					disableTooltip('bisfeature'+a)
				}
				if (player.buyinshopFeatures.includes(a)) {
					updateClass('bisfeature'+a+'button','boughtUpgrade')
				} else if (player.neutronStars.gte(costs.bisfeatures[a-1])) {
					updateClass('bisfeature'+a+'button',(oldDesign)?'supernovaUpgrade':'supernovaButton')
				} else {
					updateClass('bisfeature'+a+'button',(oldDesign)?'unaffordUpgrade':'shopUnafford')
				}
			}
		}
		if (SNTab=='neutronboosts') {
			updateElement('breakLimit',(player.breakLimit?'Fix':'Break')+' limit')
			updateElement('preSupernova','Pre-supernova:<br>'+(player.preSupernova?'On':'Off'))
			updateTooltipBase('neutronboost','x'+(Math.round(1e3+100*Math.sqrt(player.neutronBoosts.basePower))/100)+'<sup>'+format(Decimal.add(player.neutronBoosts.powers[0],player.neutronBoosts.powers[1]).add(player.neutronBoosts.powers[2]),2,1)+(totalAliens>0?' (+ '+totalAliens+')':'')+'</sup> = <b>x'+format(neutronBoost)+'</b> for all production')
			
			var items=['powerStars','powerTP','powerNS','basePower','ppPower']
			var boostType=['stars','transfer points','neutron stars']
			
			for (a=0;a<5;a++) {
				var currentText=''
				switch (a) {
					case 0: currentText='Power (stars): +'+player.neutronBoosts.powers[0]+(player.neutronBoosts.powers[0]<20?' (+1)'+((oldDesign)?'<br><br>':''):'')
					break
					
					case 1: currentText='Power (transfer points): +'+format(player.neutronBoosts.powers[a],2,1)+(player.neutronBoosts.powers[1]<20?' (+1)'+((oldDesign)?'<br><br>':''):'')
					break
					
					case 2: currentText='Power (neutron stars): +'+format(player.neutronBoosts.powers[a],2,1)+(player.neutronBoosts.powers[2]<30?' (+1)'+((oldDesign)?'<br><br>':''):'')
					break
					
					case 3: currentText='Base: '+(Math.round(1e3+100*Math.sqrt(player.neutronBoosts.basePower))/100)+((player.neutronBoosts.basePower<10)?' (+'+(Math.round(100*(Math.sqrt(player.neutronBoosts.basePower+1)-Math.sqrt(player.neutronBoosts.basePower)))/100)+')'+((oldDesign)?'<br><br>':''):'')
					break
					
					case 4: currentText='<b>x'+format(neutronBoostPP)+'</b> for PP gain increase<br>Power (prestige): '+player.neutronBoosts.ppPower+((player.neutronBoosts.ppPower<0.15)?' (+0.0375)'+((oldDesign)?'<br>':''):'')
					break
				}
				updateElement(items[a]+((oldDesign)?'Cost':''),currentText)
				if (!oldDesign) currentText=''
				if (oldDesign||((a==2)?(player.neutronBoosts.powers[2]<30):(a==3)?(player.neutronBoosts.basePower<10):(a==4)?(player.neutronBoosts.ppPower<0.15):(player.neutronBoosts.powers[a]<20))) {
					showElement(items[a]+'Cost','inline-block')
					if ((a==2)?(player.neutronBoosts.powers[2]<30):(a==3)?(player.neutronBoosts.basePower<10):(a==4)?(player.neutronBoosts.ppPower<0.15):(player.neutronBoosts.powers[a]<20)) currentText=currentText+'Cost: '+((a==0)?formatCosts(costs.neutronBoosts[a]):(a==1)?(format(costs.neutronBoosts[a])+' TP'):formatNSCosts(costs.neutronBoosts[a]))
					updateElement(items[a]+'Cost',currentText)
					if ((a==2)?(player.neutronBoosts.powers[2]==30):(a==3)?(player.neutronBoosts.basePower==10):(a==4)?(player.neutronBoosts.ppPower==0.15):(player.neutronBoosts.powers[a]==20)) {
						updateClass(items[a]+'Cost','boughtUpgrade')
					} else if ((a==0)?player.stars.gte(costs.neutronBoosts[0]):(a==1)?player.transferPoints.gte(costs.neutronBoosts[1]):player.neutronStars.gte(costs.neutronBoosts[a])) {
						updateClass(items[a]+'Cost',(oldDesign)?'supernovaUpgrade':'supernovaButton')
					} else {
						updateClass(items[a]+'Cost',(oldDesign)?'unaffordUpgrade':'shopUnafford')
					}
				} else {
					hideElement(items[a]+'Cost','block')
				}
			}
		}
		if (SNTab=='aliens') {
			updateElement('aliens','You have <b>'+player.aliens.amount+'</b>'+(player.aliens.kept>0?' (+'+player.aliens.kept+')':'')+' aliens, translated to <b>'+totalAliens+'</b> free neutron boost power')
			if (player.aliens.amount<60) {
				showElement('alienProgress','inline')
				showElement('aliensLeft','inline-block')
				updateElement('alienProgress','Progress for next alien: '+player.aliens.progress+'%')
				updateElement('aliensLeft','Time left till '+(60+player.aliens.kept)+' aliens: '+formatTime((6000-player.aliens.amount*100-player.aliens.progress)/Math.pow(2,player.aliens.resets)))
			} else {
				hideElement('alienProgress')
				hideElement('aliensLeft')
			}
			updateElement('prestigeAliens','Explode your stars but free NB power instead<br>'+player.aliens.resets+'/5')
		}
	}
	if (tab=='hypernova') {
		if (oldDesign) updateElement('quarkStars','You have <b>'+format(player.quarkStars)+'</b> quark star'+(player.quarkStars.eq(1)?'':'s'))
	}
	if (tab=='exotic') {
		updateElement('particles','You have <b>'+format(player.particles)+'</b> particles')
	}
	if (tab=='quantum') {
		updateElement('strings','You have <b>'+format(player.strings)+'</b> strings')
	}
	if (tab=='cheat') {
		updateElement('breakLimitCheat',(player.breakLimit?'Fix':'Break')+' limit')
		updateElement('breakLimitNS',(player.cheatOptions.breakLimitNS?'Fix ':'Bypass ')+format(Number.MAX_VALUE)+' NS limit')
	}
}

function gameLoop() {
	if (updated) {
		updated=false
		setTimeout(function(){
			var startTime=new Date().getTime()
			try {
				gameTick()
			} catch (e) {
				console.log('A game error has occured:')
				console.error(e)
			}
			tickspeed=Math.max((new Date().getTime()-startTime)*0.2+tickspeed*0.8,1000/player.updateRate)
			startTime=new Date().getTime()
			updated=true
		},tickspeed-1000/player.updateRate)
	}
}

function gameInit() {
	initTooltips()
	updateCosts()

	var tempSave=localStorage.getItem('save'+(oldDesign?'':2))
	if (tempSave==null) {
		tempSave=localStorage.getItem('savemgn')
		if (tempSave==null) {
			tempSave=localStorage.getItem('save'+(oldDesign?2:''))
		}
	}
	updated=true
	tickspeed=0
	load(tempSave)
}

window.addEventListener('keydown', function(event) {
    var key = event.keyCode || event.which;
	if (!keysPressed.includes(key)) keysPressed.push(key)
}, false);

window.addEventListener('keyup', function(event) {
    var key = event.keyCode || event.which;
	var newKeysPressed=[]
	for (i=0;i<keysPressed.length;i++) {
		if (keysPressed[i]!=key) newKeysPressed.push(keysPressed[i])
	}
	keysPressed=newKeysPressed
}, false);
