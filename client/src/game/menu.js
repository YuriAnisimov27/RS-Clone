const Menu = function (pjs, obj) {
	const game = pjs.game;
	const brush = pjs.brush;
	const OOP = pjs.OOP;
	const p = pjs.vector.point;
	const width = game.getWH().w;
	const height = game.getWH().h;
	const mouse = pjs.mouseControl.initMouseControl();
	const r = game.getResolution();

	const gameName = obj.name || false;
	const author = obj.author || false;
	const radius = obj.radius * r / 2 || 0;

	const iHeight = r * 50;
	let iCount  = 0;
	const iPad = iHeight / 10;

	const items = [];

	const clr = {
		itemFill : '#DC3D24',
		itemHover : '#E3AE57',
		itemColor : 'white',
		itemColorHover : '#323232',
		background : '#232B2B',
		color : 'white'
	};

	const addName = function (obj, name) {
		obj.name = name;
		obj.color = 'white';
		obj.ondraw = function () {

			if (mouse.isInObject(this)) {
				this.fillColor = clr.itemHover;
				this.color = clr.itemColorHover;
			} else {
				this.fillColor = clr.itemFill;
				this.color = clr.itemColor;
			}

			brush.drawText({
				x : this.x + this.w/2,
				y : this.y + iHeight / 4,
				text : this.name,
				color : this.color,
				size : 20 * r,
				align : 'center'
			});
		};
	};

	OOP.forEach(obj.items, function () {
		iCount += 1;
	});

	let old = false, i = 0;
	OOP.forEach(obj.items, function (value, key) {

		const item = game.newRoundRectObject({
      w : width / 3,
      h : iHeight,
			radius : radius,
			fillColor : clr.itemFill,
			y : (old ? old.y + old.h : 0) + iPad,
    });

    item.x = width / 2 - item.w / 2;


		if (i == 0) {
			item.y = height / 2 - ((iHeight + iPad)*(iCount+1)) / 2;
			i += 1;
		}

		item.loop = key;
		addName(item, value);

		items.push(item);

		old = item;

	});

	this.update = function () {
		game.fill(clr.background);

		if (gameName)
		brush.drawText({
			text : gameName,
      x : width / 2,
      y : height / 5,
			color : clr.color,
			size : r * 50,
			align : 'center'
		});

		OOP.forArr(items, function (el) {
			el.draw();

			if (mouse.isPeekObject('LEFT', el)) {
				game.setLoop(el.loop);
			}

		});

		if (author)
		brush.drawText({
			text : author,
			x : width / 2, y : height - height / 80 - (r * 10),
			color : clr.color,
			size : r * 10,
			align : 'center'
		});


	};



	this.entry = function () {

	};

	this.exit = function () {

	};

};
