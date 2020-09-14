const nameToPic = { 
	 aadypillai: ["Aady Pillai", require("./assets/MemberPictures/aadypillai.jpg")], 
	 aarushiagrawal: ["Aarushi Agrawal", require("./assets/MemberPictures/aarushiagrawal.jpg")], 
	 aayushtyagi: ["Aayush Tyagi", require("./assets/MemberPictures/aayushtyagi.jpg")], 
	 abhinavkejriwal: ["Abhinav Kejriwal", require("./assets/MemberPictures/abhinavkejriwal.jpg")], 
	 afeestiamiyu: ["Afees Tiamiyu", require("./assets/MemberPictures/afeestiamiyu.jpg")], 
	 ajaymerchia: ["Ajay Merchia", require("./assets/MemberPictures/ajaymerchia.jpg")], 
	 anandchandra: ["Anand Chandra", require("./assets/MemberPictures/anandchandra.jpg")], 
	 andresmedrano: ["Andres Medrano", require("./assets/MemberPictures/andresmedrano.jpg")], 
	 andrewsantoso: ["Andrew Santoso", require("./assets/MemberPictures/andrewsantoso.jpg")], 
	 anikabagga: ["Anika Bagga", require("./assets/MemberPictures/anikabagga.jpg")], 
	 anikgupta: ["Anik Gupta", require("./assets/MemberPictures/anikgupta.jpg")], 
	 anitashen: ["Anita Shen", require("./assets/MemberPictures/anitashen.jpg")], 
	 anjalithakrar: ["Anjali Thakrar", require("./assets/MemberPictures/anjalithakrar.jpg")], 
	 anmolparande: ["Anmol Parande", require("./assets/MemberPictures/anmolparande.jpg")], 
	 ashwinaggarwal: ["Ashwin Aggarwal", require("./assets/MemberPictures/ashwinaggarwal.jpg")], 
	 ashwinkumar: ["Ashwin Kumar", require("./assets/MemberPictures/ashwinkumar.jpg")], 
	 athenaleong: ["Athena Leong", require("./assets/MemberPictures/athenaleong.jpg")], 
	 austindavis: ["Austin Davis", require("./assets/MemberPictures/austindavis.jpg")], 
	 ayushkumar: ["Ayush Kumar", require("./assets/MemberPictures/ayushkumar.jpg")], 
	 brandondavid: ["Brandon David", require("./assets/MemberPictures/brandondavid.jpg")], 
	 candacechiang: ["Candace Chiang", require("./assets/MemberPictures/candacechiang.jpg")], 
	 candiceye: ["Candice Ye", require("./assets/MemberPictures/candiceye.jpg")], 
	 charlesyang: ["Charles Yang", require("./assets/MemberPictures/charlesyang.jpg")], 
	 colinzhou: ["Colin Zhou", require("./assets/MemberPictures/colinzhou.jpg")], 
	 danielandrews: ["Daniel Andrews", require("./assets/MemberPictures/danielandrews.jpg")], 
	 divyatadimeti: ["Divya Tadimeti", require("./assets/MemberPictures/divyatadimeti.jpg")], 
	 dohyuncheon: ["DoHyun Cheon", require("./assets/MemberPictures/dohyuncheon.jpg")], 
	 erickong: ["Eric Kong", require("./assets/MemberPictures/erickong.jpg")], 
	 ethanwong: ["Ethan Wong", require("./assets/MemberPictures/ethanwong.jpg")], 
	 francischalissery: ["Francis Chalissery", require("./assets/MemberPictures/francischalissery.jpg")], 
	 geomorales: ["Geo Morales", require("./assets/MemberPictures/geomorales.jpg")], 
	 ianshen: ["Ian Shen", require("./assets/MemberPictures/ianshen.jpg")], 
	 imrankhaliq: ["Imran Khaliq", require("./assets/MemberPictures/imrankhaliq.jpg")], 
	 jacquelinezhang: ["Jacqueline Zhang", require("./assets/MemberPictures/jacquelinezhang.jpg")], 
	 jamesjung: ["James Jung", require("./assets/MemberPictures/jamesjung.jpg")], 
	 japjotsingh: ["Japjot Singh", require("./assets/MemberPictures/japjotsingh.jpg")], 
	 joeyhejna: ["Joey Hejna", require("./assets/MemberPictures/joeyhejna.jpg")], 
	 julietkim: ["Juliet Kim", require("./assets/MemberPictures/julietkim.jpg")], 
	 kanyesthaker: ["Kanyes Thaker", require("./assets/MemberPictures/kanyesthaker.jpg")], 
	 karenalarcon: ["Karen Alarcon", require("./assets/MemberPictures/karenalarcon.jpg")], 
	 katnisslee: ["Katniss Lee", require("./assets/MemberPictures/katnisslee.jpg")], 
	 kaylijiang: ["Kayli Jiang", require("./assets/MemberPictures/kaylijiang.jpg")], 
	 kianago: ["Kiana Go", require("./assets/MemberPictures/kianago.jpg")], 
	 maggieyi: ["Maggie Yi", require("./assets/MemberPictures/maggieyi.jpg")], 
	 matthewlocayo: ["Matthew Locayo", require("./assets/MemberPictures/matthewlocayo.jpg")], 
	 maxemerling: ["Max Emerling", require("./assets/MemberPictures/maxemerling.jpg")], 
	 maxmiranda: ["Max Miranda", require("./assets/MemberPictures/maxmiranda.jpg")], 
	 melaniecooray: ["Melanie Cooray", require("./assets/MemberPictures/melaniecooray.jpg")], 
	 michaellin: ["Michael Lin", require("./assets/MemberPictures/michaellin.jpg")], 
	 michellemao: ["Michelle Mao", require("./assets/MemberPictures/michellemao.jpg")], 
	 mohitkatyal: ["Mohit Katyal", require("./assets/MemberPictures/mohitkatyal.jpg")], 
	 mudabbirkhan: ["Mudabbir Khan", require("./assets/MemberPictures/mudabbirkhan.jpg")], 
	 natashawong: ["Natasha Wong", require("./assets/MemberPictures/natashawong.jpg")], 
	 nehanagabothu: ["Neha Nagabothu", require("./assets/MemberPictures/nehanagabothu.jpg")], 
	 nicholaswang: ["Nicholas Wang", require("./assets/MemberPictures/nicholaswang.jpg")], 
	 nikhararora: ["Nikhar Arora", require("./assets/MemberPictures/nikhararora.jpg")], 
	 noahpepper: ["Noah Pepper", require("./assets/MemberPictures/noahpepper.jpg")], 
	 oliviali: ["Olivia Li", require("./assets/MemberPictures/oliviali.jpg")], 
	 patrickyin: ["Patrick Yin", require("./assets/MemberPictures/patrickyin.jpg")], 
	 paulshao: ["Paul Shao", require("./assets/MemberPictures/paulshao.jpg")], 
	 radhikadhomse: ["Radhika Dhomse", require("./assets/MemberPictures/radhikadhomse.jpg")], 
	 saiyandapalli: ["Sai Yandapalli", require("./assets/MemberPictures/saiyandapalli.jpg")], 
	 salmanhusain: ["Salman Husain", require("./assets/MemberPictures/salmanhusain.jpg")], 
	 samanthalee: ["Samantha Lee", require("./assets/MemberPictures/samanthalee.jpg")], 
	 shainachen: ["Shaina Chen", require("./assets/MemberPictures/shainachen.jpg")], 
	 shariewang: ["Sharie Wang", require("./assets/MemberPictures/shariewang.jpg")], 
	 shauryasanghvi: ["Shaurya Sanghvi", require("./assets/MemberPictures/shauryasanghvi.jpg")], 
	 shivkushwah: ["Shiv Kushwah", require("./assets/MemberPictures/shivkushwah.jpg")], 
	 shomiljain: ["Shomil Jain", require("./assets/MemberPictures/shomiljain.jpg")], 
	 shubhajagannatha: ["Shubha Jagannatha", require("./assets/MemberPictures/shubhajagannatha.jpg")], 
	 shubhamgupta: ["Shubham Gupta", require("./assets/MemberPictures/shubhamgupta.jpg")], 
	 simranregmi: ["Simran Regmi", require("./assets/MemberPictures/simranregmi.jpg")], 
	 sinjonsantos: ["Sinjon Santos", require("./assets/MemberPictures/sinjonsantos.jpg")], 
	 srujaykorlakunta: ["Srujay Korlakunta", require("./assets/MemberPictures/srujaykorlakunta.jpg")], 
	 stephenjayakar: ["Stephen Jayakar", require("./assets/MemberPictures/stephenjayakar.jpg")], 
	 tylerreinecke: ["Tyler Reinecke", require("./assets/MemberPictures/tylerreinecke.jpg")], 
	 vaibhavgattani: ["Vaibhav Gattani", require("./assets/MemberPictures/vaibhavgattani.jpg")], 
	 varunjhunjhunwalla: ["Varun Jhunjhunwalla", require("./assets/MemberPictures/varunjhunjhunwalla.jpg")], 
	 victorsun: ["Victor Sun", require("./assets/MemberPictures/victorsun.jpg")], 
	 vidyaravikumar: ["Vidya Ravikumar", require("./assets/MemberPictures/vidyaravikumar.jpg")], 
	 vineethyeevani: ["Vineeth Yeevani", require("./assets/MemberPictures/vineethyeevani.jpg")], 
	 willoakley: ["Will Oakley", require("./assets/MemberPictures/willoakley.jpg")], 
	 willvavrik: ["Will Vavrik", require("./assets/MemberPictures/willvavrik.jpg")], 
	 xinyichen: ["Xin Yi Chen", require("./assets/MemberPictures/xinyichen.jpg")], 
	 yatinagarwal: ["Yatin Agarwal", require("./assets/MemberPictures/yatinagarwal.jpg")], 
} 
export {nameToPic}