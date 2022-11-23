function doSth_1()
    {
        let a = +document.getElementById('num1_1').value; //Khi nhập chuỗi giá trị không phải là số thì convert ra number chuỗi đó trả về NaN
        let b = +document.getElementById('num2_1').value;
        let mod; //Bất kỳ phép tính toán nào trong đó NaN là một toán hạng thì kết quả trả về là NaN
        let isNum_a = !isNaN(a);
        let isNum_b = !isNaN(b);

        if (isNum_a && isNum_b)
            {
                if (b!==0)
                    {
                        mod = a % b;
                        if(mod) document.getElementById('result_1').innerText = "a không chia hết cho b";
                        else document.getElementById('result_1').innerText = "a chia hết cho b";
                    }
                else document.getElementById('result_1').innerText = "Số 'b' không được lấy giá trị bằng 0";
            }
        else document.getElementById('result_1').innerText = "Hãy nhập 'a' và 'b' là các số";
        
        // alert(a); alert(b); alert(mod);
        // alert(typeof a); alert(typeof b); alert(typeof mod);
        // alert(isNum_a); alert(isNum_b);
    };

function doSth_2()
    {
        let age = +document.getElementById('input_2').value;

        if (age)
            {
                if (age < 15) document.getElementById('result_2').innerText = "Không đủ tuổi vào lớp 10";
                else document.getElementById('result_2').innerText = "Đủ tuổi vào lớp 10";
            }
        else document.getElementById('result_2').innerText = "Hãy nhập tuổi của học sinh!";
    };

function doSth_4()
    {
        let num1 = +document.getElementById('num1_4').value;
        let num2 = +document.getElementById('num2_4').value;
        let num3 = +document.getElementById('num3_4').value;
        let max;
        let decimalNum1 = num1 - parseInt(num1);
        let decimalNum2 = num2 - parseInt(num2);
        let decimalNum3 = num3 - parseInt(num3);
        let isInt = decimalNum1 === 0 && decimalNum2 === 0 && decimalNum3 === 0

        if (isInt)
            {
                max = num1;
                if (num2 > max) max = num2;
                if (num3 > max) max = num3;
                document.getElementById('result_4').innerText = "Số lớn nhất trong 3 số là: " + max;
            }
        else document.getElementById('result_4').innerText = "Hãy nhập các số là các số nguyên";
    }

function doSth_5()
    {
        let p1 = +document.getElementById('num1_5').value;
        let p2 = +document.getElementById('num2_5').value;
        let p3 = +document.getElementById('num3_5').value;
        let tb = (p1+p2+p3)/3;

        if (tb >= 8.5) 
            document.getElementById('result_5').innerText = "Điểm A";
        else if (tb >= 7.5)
            document.getElementById('result_5').innerText = "Điểm B";
        else if (tb >= 6.5)
            document.getElementById('result_5').innerText = "Điểm C";
        else if (tb >= 4)
            document.getElementById('result_5').innerText = "Điểm D";
        else
            document.getElementById('result_5').innerText = "Điểm F";
    }

function doSth_6()
    {
        let turnover = +document.getElementById('input_6').value;

        if (turnover > 300) document.getElementById('result_6').innerText = turnover * 8/100 + ' triệu đồng';
        else if (turnover > 200) document.getElementById('result_6').innerText = turnover * 7/100 + ' triệu đồng';
        else if (turnover > 100) document.getElementById('result_6').innerText = turnover * 6/100 + ' triệu đồng';
        else document.getElementById('result_6').innerText = turnover * 5/100 + ' triệu đồng';
    }