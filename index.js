// Ham domId
function domId(id) {
  return document.getElementById(id)
};
//BÀI1: quản lý tuyển sinh
// hàm lấy giá trị điểm khu vực
function typeArea(area) {
  var point = domId(area).value;
  if (point === 'A') {
    return 2;
  }else if (point === 'B') {
    return 1;
  }else if (point === 'C') {
    return 0.5;
  }else {
    return 0
  }
};  

// hàm lấy giá trị điểm đối tượng
function typePeople(people) {
  var point = domId(people).value;
  switch (point) {
    case '1':
      return 2.5;
    case '2':
      return 1.5;
    case '3':
      return 1;
    default :{
      return 0;
    }
  }
}

// hàm Tính điểm

function totalGrande(idStander,idSub1,idSub2,idSub3) {
  
  //INPUT:điểm chuẩn , điểm môn 1, điểm môn 2, điểm môn 3, điểm khu vực, điểm đối tượng được ưu tiên.
  var standardPoint = Number(domId(idStander).value);
  var sub1 = Number(domId(idSub1).value);
  var sub2 = Number(domId(idSub2).value);
  var sub3 = Number(domId(idSub3).value);
  var pointArea = typeArea('typeArea');
  var pointPeople = typePeople('typePeople');

  // OUTPUT:báo điểm tổng và kết quả đậu rớt
  var totalGrand = sub1 + sub2 + sub3 + pointArea + pointPeople;
  var totalPoint = 0;
  //Process:điểm tổng  = điểm môn 1 + điểm môn 2 + điểm môn 3 + điểm khu vực + điểm ưu tiên
  //điểm tổng = điểm chuẩn và không điểm môn nào bằng không.
  if (totalGrand >= standardPoint && sub1 > 0 && sub2 > 0 && sub3 >0) {
    totalPoint = 'Bạn Đã Đậu. ' + 'Tổng Điểm: ' + totalGrand; 
  }else {
    totalPoint = 'Bạn Không Đã Rớt. ' + 'Tổng Điểm: ' + totalGrand;
  }

  return totalPoint
};
// tạo sự kiện onclick và in kết quả
domId('btnGrade').onclick = function () {
  
  domId('tagPoint').innerHTML = totalGrande('standardPoint','sub1','sub2','sub3');
};


// Bài 2 Tính tiền điện
//Hàm Tính Tiền điện
function elecBill(kw) {

  //INPUT: tên nguoi su dung, so kw
  var elecKw = Number(domId(kw).value);

  //OUTPUT:tính và xuất tiền điện
  var resultElec = 0;
  
  //số kw * giá điện
  //0 đến 50 kw gá 500d
  //50 đến 100kw giá 650d
  //100 - 200kw giá 850d
  //200 - 350kw giá 1100d
  //hớn 350kw giá 1300d
  if (elecKw <= 50 && elecKw > 0) {
    resultElec = elecKw * 500;
  }else if (elecKw <= 100) {
    resultElec = 50 * 500 + (elecKw - 50) * 650;
  }else if (elecKw <= 200) {
    resultElec = 50 * 500 + 50 * 650 + (elecKw - 100) * 850;
  }else if (elecKw <= 350) {
    resultElec = 50 * 500 + 50 * 650 
    + 100 * 850 + (elecKw - 200) * 1100;
  }else {
    resultElec = 50 * 500 + 50 * 650 + 100 * 850 
    + 150 * 1100 + (elecKw - 350) * 1300;
  }
  return resultElec;
};
//viết sự kiện onclick.
document.getElementById('btnElecBill').addEventListener('click', function () {
  var userNameElec = domId('elecName').value;
  var resultElec = elecBill('elecKw');
  //hiện thị kết quả:
  document.getElementById('tagElecBill').innerHTML = 'Họ Tên: ' 
  + userNameElec + '; ' + ' Tiền Điện: ' + resultElec.toLocaleString() + ' VND.';
});

// BÀI 3 Tính thuế thu nhập cá nhân
// viết hàm tính thu nhập chịu thuế:
  function income() {
    var incomeTax = Number(domId('inconme').value);
    var dependence = Number(domId('dependence').value);
    // OUTPUT:
    var incomeRank = 0;
    if (dependence > 0) {
      incomeRank = incomeTax - 4e+6 - (dependence * 16e+5);
    }else {
      incomeRank = incomeTax - 4e+6;
    }
    return incomeRank    
  };

  //Viết hàm tính thuế xuất:
  function incomeTax() {  
    var incomeTax = income();
    // OUTPUT:
    var resultIncome = 0;
    ///process: tinh thu nhap chiu thue = tổng thu nhập - 4tr  - so nguoi phụ thuộc * 1tr6;
    if (incomeTax <= 60e+6 && incomeTax > 4e+6) {
      resultIncome = incomeTax * 0.05;
    }else if (incomeTax > 60e+6) {
      resultIncome = 60e+6 * 0.05 + (incomeTax - 60e+6) * 0.1;
    }else if (incomeTax > 120e+6) {
      resultIncome = 60e+6 * 0.05 + 60e+6 * 0.1 + (incomeTax - 120e+6) * 0.15;
    }else if (incomeTax > 210e+6) {
      resultIncome = 60e+6 * 0.05 + 60e+6 * 0.1 + 90e+6 * 0.15 
      + (incomeTax - 210e+6) * 0.2;
    }else if (incomeTax > 384e+6) {
      resultIncome = 60e+6 * 0.05 + 60e+6 * 0.1 + 90e+6 * 0.15 
      + 174e+6 * 0.2 + (incomeTax - 384e+6) * 0.25;
    }else if (incomeTax > 624e+6) {
      resultIncome = 60e+6 * 0.05 + 60e+6 * 0.1 + 90e+6 * 0.15 
      + 174e+6 * 0.2 + 240e+6 * 0.25 + (incomeTax - 624e+6) * 0.3;
    }else if (incomeTax > 960) {
      resultIncome = 60e+6 * 0.05 + 60e+6 * 0.1 + 90e+6 * 0.15 
      + 174e+6 * 0.2 + 240e+6 * 0.25 + 336e+6 * 0.3 + (incomeTax - 960e6) * 3.5;
    }else {
      resultIncome = alert('Tiền thu nhập không hợp lệ');
    }
    
    return resultIncome;
  };
domId('btnIncome').onclick = function () {
  
  // input họ tên, tổng thu nhập / năm, số người phụ thuộc
  var incomeName = domId('taxName').value;
  var incomeTotal = incomeTax();  

  //output
  var incomeResult = 'Họ Và Tên: ' + incomeName + '; Tiền Thuế Thu Nhập Cá Nhân: ' + incomeTotal.toLocaleString();
  
  domId('tagIncomeTax').innerHTML = incomeResult; 

};

// BÀI 4 Tính tiền cáp
  // viết hàm tính tiền cáp khách hang doanh nghiệp:
function cableBillBusiness(channels,moreConection) {
  // output 
  var billTotal = 0;

  // Process: nhà dân : phi dịch vụ cơ bản + phi xử lý hóa đơn + kênh cao cấp
  //doanh nghiệp: phi dịch vu co bản + phí xử lý hóa đơn + kenh cao cap. phi dịch vu cơ bản là cho 10 kết nối 
  
  if (moreConection <= 10) {
    billTotal = 15 + 75 + channels * 50;
  }else {
    billTotal = 15 + 75 + (moreConection - 10) * 5 + channels * 50;
  }
  
  return billTotal 
}

// viet Hàm tính Hóa Đơn Cáp Nhà Dân

function cableHomeBill(channels) {
 // output
 var billTotal = 4.5 + 20.5 + channels * 7.5;

 return billTotal
}





domId('btncableBill').onclick = function () {
  /// input;
  var client = domId('selecCable').value;

  var cableName = domId('cableName').value;
  var channels = Number(domId('channels').value);
  var moreConection = Number(domId('moreConnection').value);
  // hàm tính tiền cáp
  var business = cableBillBusiness(channels,moreConection);
  var home = cableHomeBill(channels);
  // output
  var toTalBillCable = '';

  //process

  if (client === 'Ba') {
    toTalBillCable = 'Mã Khách Hang: ' + cableName + ' ; Tiền Cáp: ' + business + '$';
  }else if (client === 'Bb') {
    toTalBillCable = 'Mã Khách Hang: ' + cableName + ' ; Tiền Cáp: ' + home + '$';
  }else {
    toTalBillCable = 'Vui Lòng Chọn Loại Khách Hàng';
  }
 
  domId('cableToBill').innerHTML = toTalBillCable;
};

//Button
var check = "b1", check1 = "bai1";
domId("bai1").onclick = function () {
    domId(check).style.display = 'none';
    domId("b1").style.display = 'block';
    check = "b1";
    domId(check1).classList.remove('mode');
    check1 = "bai1";
    domId(check1).classList.add('mode');

}
domId("bai2").onclick = function () {
    domId(check).style.display = 'none';
    domId("b2").style.display = 'block';
    check = "b2";
    domId(check1).classList.remove('mode');
    check1 = "bai2";
    domId(check1).classList.add('mode');
}
domId("bai3").onclick = function (){
    domId(check).style.display = 'none';
    domId("b3").style.display = 'block';
    check = "b3";
    domId(check1).classList.remove('mode');
    check1 = "bai3";
    domId(check1).classList.add('mode'); 
}
domId("bai4").onclick = function (){
    domId(check).style.display = 'none';
    domId("b4").style.display = 'block';
    check = "b4";
    domId(check1).classList.remove('mode');
    check1 = "bai4";
    domId(check1).classList.add('mode'); 
}