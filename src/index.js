			top: Math.abs(rec2Top-rec1Top)+'px',
				left : Math.abs(rec2left-rec1left) + 'px',
				bottom : Math.abs(rec2bt-rec1bt)+"px",
				right : Math.abs(rec2rt-rec1rt) + 'px',
				children: []
			}]
		}
	}
	
	return rec1;
}
function solveCase3(rec1,rec2){
	let rec1bt = parseInt(rec1.bottom);
	let rec2bt = parseInt(rec2.bottom);
	let rec1rt = parseInt(rec1.right);
	let rec2rt = parseInt(rec2.right);
	let rec1ht = parseInt(rec1.height);
	let rec2ht = parseInt(rec2.height);
	let rec1wd = parseInt(rec1.width);
	let rec2wd = parseInt(rec2.width);
	if(rec1bt <= rec2bt && rec1rt <= rec2rt && rec1bt+rec1ht >= rec2bt+rec2ht && rec1rt+rec1wd >= rec2rt+rec2wd){
		return {
			...rec1,
			children : [{
				bottom : Math.abs(rec2bt-rec1t) + 'px',
				right: Math.abs(rec2rt-rec1rt)+'px',
				height : rec2.height,
				width : rec2.width,
				children: []
			}]
		}
	}
	if(rec2bt <= rec1bt && rec2rt <= rec1rt && rec2bt+rec2ht >= rec1bt+rec1ht && rec2rt+rec2wd >= rec1rt+rec1wd){
		return {
			...rec2,
			children : [{
				bottom : Math.abs(rec2bt-rec1bt) + 'px',
				right: Math.abs(rec2rt-rec1rt)+'px',
				height : rec1.height,
				width : rec1.width,
				children: []
			}]
		}
	}
	
	return rec1;
}

function solveCase4(rec1,rec2){
	let rec1top = parseInt(rec1.top);
	let rec2top = parseInt(rec2.top);
	let rec1rt = parseInt(rec1.right);
	let rec2rt = parseInt(rec2.right);
	let rec1ht = parseInt(rec1.height);
	let rec2ht = parseInt(rec2.height);
	let rec1wd = parseInt(rec1.width);
	let rec2wd = parseInt(rec2.width);
	if(rec1top <= rec2top && rec1rt <= rec2rt && rec1top+rec1ht >= rec2top+rec2ht && rec1rt+rec1wd >= rec2rt+rec2wd){
		return {
			...rec1,
			children : [{
				top: Math.abs(rec2top-rec1top)+'px',
				right : Math.abs(rec2rt-rec1rt) + 'px',
				height : rec2.height,
				width : rec2.width,
				children: []
			}]
		}
	}
	if(rec2top <= rec1top && rec2rt <= rec1rt && rec2top+rec2ht >= rec1top+rec1ht && rec2rt+rec2wd >= rec1rt+rec1wd){
		return {
			...rec2,
			children : [{
				top: Math.abs(rec2top-rec1top)+'px',
				right : Math.abs(rec2rt-rec1rt) + 'px',
				height : rec1.height,
				width : rec1.width,
				children: []
			}]
		}
	}
	return rec1;
}
function solveCase5(rec1,rec2){
	let rec1bt = parseInt(rec1.bottom);
	let rec2bt = parseInt(rec2.bottom);
	let rec1left = parseInt(rec1.left);
	let rec2left = parseInt(rec2.left);
	let rec1ht = parseInt(rec1.height);
	let rec2ht = parseInt(rec2.height);
	let rec1wd = parseInt(rec1.width);
	let rec2wd = parseInt(rec2.width);
	if(rec1bt <= rec2bt && rec1left <= rec2left && rec1bt+rec1ht >= rec2bt+rec2ht && rec1left+rec1wd >= rec2left+rec2wd){
		return {
			...rec1,
			children : [{
				bottom: Math.abs(rec2bt-rec1bt)+'px',
				left : Math.abs(rec2left-rec1left) + 'px',
				height : rec2.height,
				width : rec2.width,
				children: []
			}]
		}
	}
	if(rec2bt <= rec1bt && rec2left <= rec1left && rec2bt+rec2ht >= rec1bt+rec1ht && rec2left+rec2wd >= rec1left+rec1wd){
		return {
			...rec2,
			children : [{
				bottom: Math.abs(rec2bt-rec1bt)+'px',
				left : Math.abs(rec2left-rec1left) + 'px',
				height : rec1.height,
				width : rec1.width,
				children: []
			}]
		}
	}
	
	return rec1;
}


module.exports = updateStructure;
