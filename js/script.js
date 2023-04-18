// GLOBAL letIABLES
const urlParams = new URLSearchParams(window.location.search);
const type = urlParams.get('type');

let skills = [
    ['Programming', 5],
    ['Circuit analysis', 5],
    ['Failure analysis and resolution', 5],
    ['Tool/script development', 5],
    ['Hardware design', 4],
    ['3D design', 4],
];

let software = [
    ['Perl, Python, TCL', 5],
    ['C++, C#, Visual Basic', 5],
    ['Unix and MS Office', 5],
    ['HTML, Javascript', 4],
    ['LTSpice simulation', 4],
    ['Verilog, VHDL, Assembler', 4],
    ['AutoCad, Fusion 360, Blender', 4],
];

let languages = [
    ['English', 5],
    ['Spanish', 5],
    ['German', 2],
];

let jobs = [
    [
        'Test Engineer',
        'Robart GmbH - Linz, Austria',
        '2022/03 - Current',
        `Responsible for testing AI vacuum robots accross all production stages, from initial prototypes to mass production certification.
        Developed scripting, web-based and 3D designed solutions to improve the testing and product qualification process.`
    ],
    [
        'Hardware Engineer',
        'Teradyne Inc - Heredia, Costa Rica',
        '2017/05 - 2022/02',
        `Responsible for analyzing, debugging and root-causing of hardware issues for several testing equipment and platforms.
        Developed several tools in various programming languages/platforms (Perl, Python, C++, C#, HTML) and 3D printed solutions to support debugging activities.`,
    ],
    [
        'Test Engineer',
        'Philips Volcano - Alajuela, Costa Rica',
        '2016/06 - 2017/04',
        `Responsible for development, installation and maintenance of testing equipment for Intravascular Ultrasound and Image-Guided Therapy medical devices.
        Required close communicacion with customers, manufacturing engineers and line operators across a great number of products.`,
    ],

    [
        'Graphics Hardware Structural Design Engineer',
        'Intel - Heredia, Costa Rica',
        '2014/06 - 2016/05',
        `Responsible for implementing physical circuit design based on Register-Transfer-Level (RTL) design specifications, for Intel's Graphics microprocessors used on server, CPU, mobile and Internet-Of-Things devices.
        Lead several process improvement initiatives through the scripting development and coaching.`,
    ],
    [
        'Failure Analysis Engineer',
        'Intel - Heredia, Costa Rica',
        '2012/06 - 2014/05',
        `Responsible for analyzing, debugging and root-causing parametric and functional failures on assembled Intel CPU and server microprocessors.
        Analysis performed on failures coming from assembly, manufacturing, design or in-system final customer issues.`,
    ],
    [
        'Product Development Engineering Student Worker',
        'Intel - Heredia, Costa Rica',
        '2011/01 - 2012/05',
        `Responsible for developing, testing and qualifying test modules and programs in the post-silicon product stage for Intel server microprocessors.
        Developed a tool to generate thermal response profiles for tested devices as part of my Engineering degree thesis.`,
    ],

];


window.onload = function () {
    console.log(type);
    

    getSkills(skills, 'skills');
    getSkills(software, 'software');
    getSkills(languages, 'languages');
    getWorkHistory(type);
}

function getSkills(skills, divName) {

    let skillsDiv = document.getElementById(divName);

    for (let skill of skills) {
        // Create row
        const row = document.createElement('div');
        row.classList.add('row');
        skillsDiv.appendChild(row);

        // Create col-sm-8
        const col8 = document.createElement('div');
        col8.classList.add('col-sm-8');
        row.appendChild(col8);

        // Create paragraph inside col8 
        const par1 = document.createElement('p');
        col8.appendChild(par1);

        // Create text for par1
        const text = document.createTextNode(skill[0]);
        par1.appendChild(text);

        // Create col 4 for image
        const col4 = document.createElement('div');
        col4.classList.add('col-sm-4');
        col4.classList.add('text-center');
        row.appendChild(col4);

        // Create paragraph inside col8 
        const par2 = document.createElement('p');
        col4.appendChild(par2);

        // Create image for par2
        //<img class="icon" height="25" src="img/4.png"></p>
        const image = document.createElement('img');
        image.classList.add('icon');
        image.setAttribute('height', '25');
        image.src = 'img/' + skill[1] + '.png';
        par2.appendChild(image);
    }
}

function getWorkHistory(type = 3) {
    if(type == 1) {
        createType1();
    }
    else if(type == 2) {
        createType2();
    }
    else if(type == 3) {
        createType3();
    }
    else {
        createType1();
    }


}

function createType1() {
    // TYPE 1
    //<div class="row">
    //    <div class="col-sm-3">
    //        <p class="date"><b>2014/06 - 2016/05</b></p>
    //    </div>
    //    <div class="col-sm-9">
    //        <p style="font-size: 20px"><b>Graphics Hardware Structural Design Engineer</b></p>
    //        <p style="font-style: italic">Intel - Heredia, Costa Rica</p>
    //        <p>Responsible for implementing physical circuit design based on Register-Transfer-Level (RTL) design specifications, for Intel's Graphics microprocessors used on server, CPU, mobile and Internet-Of-Things devices.
    //        <br>Lead several process improvement initiatives through the scripting development and coaching.</p>
    //    </div>
    //</div>

    let workDiv = document.getElementById('workHistory');

    for (let job of jobs) {
        const row = document.createElement('div');
        row.classList.add('row');
        workDiv.appendChild(row);

        const col3 = document.createElement('div');
        col3.classList.add('col-sm-3');
        row.appendChild(col3);

        const par1 = document.createElement('p');
        par1.classList.add('date');
        col3.appendChild(par1);
        const b1 = document.createElement('b');
        par1.appendChild(b1);
        const text1 = document.createTextNode(job[2]);
        b1.appendChild(text1);

        const col9 = document.createElement('div');
        col9.classList.add('col-sm-9');
        row.appendChild(col9);

        const par2 = document.createElement('p');
        par2.setAttribute('style', 'font-size: 20px');
        col9.appendChild(par2);
        const b2 = document.createElement('b');
        par2.appendChild(b2);
        const text2 = document.createTextNode(job[0]);
        b2.appendChild(text2);

        const par3 = document.createElement('p');
        par3.setAttribute('style', 'font-style: italic');
        col9.appendChild(par3);
        const text3 = document.createTextNode(job[1]);
        par3.appendChild(text3);

        const par4 = document.createElement('p');
        col9.appendChild(par4);
        const text4 = document.createTextNode(job[3]);
        par4.appendChild(text4);



    }

}

function createType2() {
    // TYPE 2
    // <div class="row border-bottom">
    //     <div class="col-sm-4">
    //         <p style="font-size: 20px"><b>Test Engineer</b></p>
    //         <p style="font-style: italic"><b>Robart GmbH - Linz, Austria</b></p>
    //         <p>2022/03 - Current</p>
    //     </div>
    //     <div class="col-sm-8">
            
            
    //         <p>Responsible for testing AI vacuum robots accross all production stages, from initial prototypes to mass production certification.
    //         <br>Developed scripting, web-based and 3D designed solutions to improve the testing and product qualification process.</p>
    //     </div>
    // </div>

    let workDiv = document.getElementById('workHistory');

    for (let job of jobs) {
        const row = document.createElement('div');
        row.classList.add('row');
        row.classList.add('border-bottom');
        workDiv.appendChild(row);

        const col4 = document.createElement('div');
        col4.classList.add('col-sm-4');
        row.appendChild(col4);

        const par1 = document.createElement('p');
        par1.setAttribute('style', 'font-size: 20px');
        col4.appendChild(par1);
        const b1 = document.createElement('b');
        par1.appendChild(b1);
        const text1 = document.createTextNode(job[0]);
        b1.appendChild(text1);

        const par2 = document.createElement('p');
        par2.setAttribute('style', 'font-style: italic');
        col4.appendChild(par2);
        const text2 = document.createTextNode(job[1]);
        par2.appendChild(text2);

        const par3 = document.createElement('p');
        col4.appendChild(par3);
        const text3 = document.createTextNode(job[2]);
        par3.appendChild(text3);



        const col8 = document.createElement('div');
        col8.classList.add('col-sm-8');
        row.appendChild(col8);

        const par4 = document.createElement('p');
        col8.appendChild(par4);
        const text4 = document.createTextNode(job[3]);
        par4.appendChild(text4);
    }

}

function createType3() {
    // TYPE 3
    // <div class="row">
	//      <div class="col-sm-4"><p style="font-size: 20px"><b>Test Engineer</b></p></div>
    //      <div class="col-sm-5"><p style="font-style: italic">Philips Volcano - Alajuela, Costa Rica</p></div>
    //      <div class="col-sm-3"><p class="date"><b>2016/06 - 2017/04</b></p></div>
    // </div>	
        
    // <div class="row">
    //     <div class="col">	
    //         <p>Responsible for development, installation and maintenance of testing equipment for Intravascular Ultrasound and Image-Guided Therapy medical devices.
    //         <br>Required close communicacion with customers, manufacturing engineers and line operators across a great number of products.</p>
    //     </div>
    // </div>

    let workDiv = document.getElementById('workHistory');

    for (let job of jobs) {
        const row1 = document.createElement('div');
        row1.classList.add('row');
        workDiv.appendChild(row1);

        const col4 = document.createElement('div');
        col4.classList.add('col-sm-4');
        row1.appendChild(col4);

        const par1 = document.createElement('p');
        par1.setAttribute('style', 'font-size: 20px');
        col4.appendChild(par1);
        const b1 = document.createElement('b');
        par1.appendChild(b1);
        const text1 = document.createTextNode(job[0]);
        b1.appendChild(text1);

        const col5 = document.createElement('div');
        col5.classList.add('col-sm-5');
        row1.appendChild(col5);

        const par2 = document.createElement('p');
        par2.setAttribute('style', 'font-style: italic');
        col5.appendChild(par2);
        const text2 = document.createTextNode(job[1]);
        par2.appendChild(text2);

        const col3 = document.createElement('div');
        col3.classList.add('col-sm-3');
        row1.appendChild(col3);

        const par3 = document.createElement('p');
        par3.setAttribute('style', 'text-align: right');
        col3.appendChild(par3);
        const text3 = document.createTextNode(job[2]);
        par3.appendChild(text3);

        const row2 = document.createElement('div');
        row2.classList.add('row');
        //row2.classList.add('border-bottom');
        workDiv.appendChild(row2);

        const col = document.createElement('div');
        col.classList.add('col');
        row2.appendChild(col);

        const par4 = document.createElement('p');
        col.appendChild(par4);
        const text4 = document.createTextNode(job[3]);
        par4.appendChild(text4);
    }    
}
