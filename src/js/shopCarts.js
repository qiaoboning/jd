$(function(){
	// 计算总价格
	// 遍历单价再相加
	var totalPrice=0;
	// 全选   
	$("#checkAll").click(function() {
		if($(this).attr("checked")){
			$(".choose").each(function() {   
				$(this).attr("checked", true); 
			});
			//计算总价
			// totalPrice=0;
			$(".sinPrice").each(function(){
				totalPrice+=parseInt($(this).text())*parseInt($(this).parent().next().find(".number").text());
			});
			$(".totalPrice").text(totalPrice);

			$(".plus").click(function(){
				// totalPrice=0;
				// 改变数量	
				var number=$(this).parent().prev().children().text();
				number++;	
				$(this).parent().prev().children().text(number);
				// 改变价格
				// 获取单价	
				var singlePrice=$(this).parent().parent().prev().children().text();
				// 改变总金额
				totalPrice+=parseInt(singlePrice);
				$(".totalPrice").text(totalPrice);	
			});

			// 点击-数量减少
			$(".reduce").click(function(){
				// totalPrice=0;
				// 改变数量
				var number=$(this).parent().next().children().text();
				number--;
				if(number<1){
					number=1;
				}
				$(this).parent().next().children().text(number);
				// 获取单价	
				var singlePrice=$(this).parent().parent().prev().children().text();
				// 改变总金额
				totalPrice-=parseInt(singlePrice);
				$(".totalPrice").text(totalPrice);			
			});
		}else{
			$(".choose").each(function() {   
				$(this).attr("checked", false); 
			});
			totalPrice=0;
			$(".totalPrice").text(totalPrice);
		}  	   
	});   
	// 选中某一个
	$(".choose").click(function(){
		if($(this).attr("checked")){
			// totalPrice=0;
			totalPrice+=$(this).parent().next().find(".sinPrice").text()*$(this).parent().next().find(".number").text()
			$(".totalPrice").text(totalPrice);

			$(".plus").click(function(){
				// totalPrice=0;
				// 改变数量	
				var number=$(this).parent().prev().children().text();
				number++;	
				$(this).parent().prev().children().text(number);
				// 改变价格
				// 获取单价	
				var singlePrice=$(this).parent().parent().prev().children().text();
				// 改变总金额
				// $(".sinPrice").each(function(){
				// 	totalPrice+=parseInt($(this).text())*parseInt($(this).parent().next().find(".number").text());
				// });
				totalPrice+=parseInt(singlePrice);
				$(".totalPrice").text(totalPrice);	
			});

			// 点击-数量减少
			$(".reduce").click(function(){
				// totalPrice=0;
				// 改变数量
				var number=$(this).parent().next().children().text();
				number--;
				if(number<1){
					number=1;
				}
				$(this).parent().next().children().text(number);
				// 获取单价	
				var singlePrice=$(this).parent().parent().prev().children().text();
				// 改变总金额
				// $(".sinPrice").each(function(){
				// 	totalPrice+=parseInt($(this).text())*parseInt($(this).parent().next().find(".number").text());
				// });
				// totalPrice+=number*singlePrice;
				totalPrice-=singlePrice;
				$(".totalPrice").text(totalPrice);			
			});
			
		}else{
			totalPrice-=$(this).parent().next().find(".sinPrice").text()*$(this).parent().next().find(".number").text()
			$(".totalPrice").text(totalPrice);
		}
	});
});
