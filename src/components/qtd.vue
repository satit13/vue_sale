
<template>
  <div class="Qtd">
    <div class="cont">
      <div class="T-r">
        <div class="titile-l">
          <h1>มูลค่ารวม</h1>
          <i class="material-icons">monetization_on</i>
        </div>
        <div class="detail-r">
          <h1>99,999,999.99</h1>
        </div>
    </div>

    <div class="t-l">
        <div class="rowtext-3">
          <div class="lb">
            <h3>เลขที่เอกสาร</h3>
          </div>
          <div class="tx">
            <input  type="text" name="">
            <button> .... </button>
          </div>    
        </div>

        <div class="rowtext-3">
          <div class="lb">
            <h3>ประเภทภาษี</h3>
          </div>
          <div class="tx">
            <select>
              <option>แยกนอก</option>
              <option>รวมใน</option>
            </select>
          </div>
        </div>
        <div class="rowtext-3">
          <div class="lb">
            <h3>ประเภทราคา</h3>
          </div>
          <div class="tx">
            <select>
              <option>ขายสด</option>
              <option>ขายเชื่อ</option>
            </select>
          </div>
      </div>
    <!-- endof "t-l"-->
    </div>
    <div class="t-l">
        <div class="rowtext-3">          
          <div class="lb">
            <h3>วันที่เอกสาร</h3>
          </div>
          <div class="tx">
            <input type="date" >
          </div>
        </div>  
        <div class="rowtext-3">
          <div class="lb">
            <h3>รหัสลูกค้า</h3>
          </div>
          <div class="tx">
           <input  type="text" placeholder="รหัสลูกค้า..." style="width:70%;">
           <i  class="material-icons" style="margin-top:3% ; margin-left:0">search</i>
          </div>
        </div>

        <div class="rowtext-3">          
          <div class="lb">
            <h3>ชื่อลูกค้า</h3>
          </div>
          <div class="tx">
            <input type="text" placeholder="ชื่อลูกค้า" style="width:70%;" readonly>
          </div>
        </div>  
  </div>
<!-- <hr style="clear: both;" /> -->

   <div class="qt-body">
   
    <div class="web-view">
     <table class="tableSection">
         <thead>
             <tr>
                 <th style="width: 5%; text-align: center;">ลำดับ</th>
                 <th style="width: 15%; text-align: center;">รหัสสินค้า</th>
                 <th style="width: 20%; text-align: center;">ชื่อสินค้า</th>
                 <th style="width: 10%; text-align: center;">หน่วยนับ</th>
                 <th style="width: 10%; text-align: center;" ng-show="is_docType == 'SaleOrder'">คลัง | คงเหลือ</th>
                 <th style="width: 10%; text-align: center;" class="text">จำนวน</th>
                 <th style="width: 10%; text-align: center;" class="text">ราคา/หน่วย</th>
                 <th style="width: 10%; text-align: center;" class="text">ส่วนลด % ,บาท</th>
                 <th style="text-align: center;" class="text">จำนวนเงิน</th>
             </tr>
         </thead>
         <tbody>
                 <tr>
                  <td>1</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                 </tr>  
                 <tr>
                  <td>1</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                 </tr> 
                 <tr>
                  <td>1</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                 </tr> 
                 <tr>
                  <td>1</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                 </tr> 
                 <tr>
                  <td>1</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                 </tr>    
                 <tr>
                  <td>1</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                 </tr>   
                 <tr>
                  <td>1</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                 </tr>
                 <tr>
                  <td>1</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                 </tr>    
         </tbody>
     </table>
    </div>
    <button class="addItem" @click="SearchItem">+</button>
   </div>



   <!--Sumarry-bottom of page  -->
   <div class="bt-body">

      <!--first column  -->
      <div class="bt-lu">
          <div class="rowtext">
             <div class="lb">  ยอดคงเหลือ </div>
             <div class="tx"> 
                <input type="text" placeholder="ยอดคงเหลือ">
             </div>
          </div>
         <div class="rowtext">
         <div class="lb">  
          รหัสพนักงาน 
         </div>
            <div class="tx">
             <input  type="text" placeholder="ชื่อพนักงาน" >
             <i  class="material-icons" >search</i>
            </div>
        </div>
        <div class="rowtext" style="height:100px">
         <div class="lb">  หมายเหตุ </div>
         <div class="tx"> 
            <textarea style="width:70% ; height:100%; color:red;">หมายเหตุ</textarea> 
         </div>
        </div> 
      </div>
      <!--second column  -->
      <div class="bt-lu">
        <div class="rowtext">
        <div class="lb">  ยืนราคา </div>
         <div class="tx"> 
            <input type="number" placeholder="ยืนราคา">
         </div>
         </div>
           <div class="rowtext">
         <div class="lb">  ลูกค้าตอบรับภายใน </div>
         <div class="tx"> 
            <input type="number" placeholder=" ลูกค้าตอบรับภายใน">
         </div> 
         </div>

           <div class="rowtext">
          <div class="lb">  หมดอายุภายใน</div>
         <div class="tx"> 
            <input type="number" placeholder=" หมดอายุภายใน">
        </div> 
        </div>
          <div class="rowtext">
           <div class="lb">  ส่งมอบภายใน</div>
         <div class="tx"> 
            <input type="number" placeholder=" ส่งมอบภายใน">
         </div> 
         </div>
      </div>

      <!--third column  -->
      <div class="bt-lu">
        <div class="rowtext">
           <div class="lb">เงื่อนไขการส่งมอบ </div>
           <div class="tx"> 
              <select>
                <option>รับเอง</option>
                <option>ส่งให้</option>
              </select> 
           </div>
         </div>

          <div class="rowtext">
         <div class="lb">คำตอบลูกค้า </div>
         <div class="tx"> 
            <select>
              <option>ยอมรับ</option>
              <option>ไม่รับ</option>
            </select> 
         </div>
         </div>
         <div class="rowtext">
           <div class="lb">  วันที่หมดอายุ</div>
           <div class="tx"> 
              <input type="date" placeholder=" วันที่หมดอายุ">
           </div> 
         </div>

         <div class="rowtext">
         <div class="lb">  ลงวันที่</div>
         <div class="tx"> 
            <input type="date" placeholder="ลงวันที่">
         </div> 
         </div>

      </div>

      <!--furth column  -->
      <div class="bt-lu">
        <div class="rowtext">
        <div class="lb">  รวมมูลค่า </div>
         <div style="width:65%" class="tx"> 
            <input readonly type="number" placeholder="มูลค่าสินค้า">
         </div>
         </div>

          <div class="rowtext"> 
        <div class="lb">  อัตราภาษีมูลค่าเพิ่ม </div>
         <div class="tx"> 
            <input  value=7 max=10 min=0 type="number" placeholder="อัตราภาษี%" style="text-align:right;width: 20%">
            <h3>%</h3>
            <input type="number" placeholder="ภาษีมูลค่าเพิ่ม" style="width:40%">
         </div> 
         </div>
        <div class="rowtext">
           <div class="lb" >ส่วนลด</div>
           <div class="tx"> 
              <input type="number" placeholder="% ส่วนลด" min=0 style="width:20%">
               <h3>%</h3>
               <input type="number" placeholder="มูลค่าส่วนลด" style="width:40%">
           </div>  
        </div>
      </div>
     
   </div>
  </div>

<!-- Model form  -->
  <div id="Sitem" class="modal">
    <div class="modal-background"></div>
    <div class="modal-card" style="height:50%">
      <header class="modal-card-head" >
        <h3 class="modal-card-title" >ค้นหาสินค้า</h3>
        <div class="field" style="width:80% ">
            <div class="control" style="float:left; width:60%">
              <input class="input is-info" type="text" placeholder="Info input" >
            </div>
            <button style="width:20%;height:37px;">....</button>
          </div>
        <button class="delete" @click="closeSitem" aria-label="close"></button>
      </header>
     <section class="modal-card-body">
      <!-- Content ... -->
       <div class="search_row">

         <div class="search_data"  >
            <div class="rowtext">
            <label style="clear:both;float:left;width=20%; height:20px ; ">itemcode : </label>
            <label style="float:left;width=75%; height:20px ; ">itemname </label>
            </div>
            
            <label style="clear:both;float:left ;"> ราคาสินค้า : </label>
            <label style="float:left ;">112 ฿</label>
            <label style="clear:both;float:left"> ราคาสินค้า : </label>
            <label style="float:left">112 ฿</label>


         </div>

           <div class="search_data"  >
            <label style="float:left;width=20%; height:20px ; ">itemcode : </label>
            <label style="float:left;width=75%; height:20px ; ">itemname </label>
            <label style="clear:both;float:left ;"> ราคาสินค้า : </label>
            <label style="float:left ;">112 ฿</label>
            <label style="clear:both;float:left"> ราคาสินค้า : </label>
            <label style="float:left">112 ฿</label>


         </div>


           <div class="search_data" >
            <label style="float:left;width=20%; height:20px ; ">itemcode : </label>
            <label style="float:left;width=75%; height:20px ; ">itemname </label>
            <label style="clear:both;float:left ;"> ราคาสินค้า : </label>
            <label style="float:left ;">112 ฿</label>
            <label style="clear:both;float:left"> ราคาสินค้า : </label>
            <label style="float:left">112 ฿</label>


         </div>


           <div class="search_data"  >
            <label style="float:left;width=20%; height:20px ; ">itemcode : </label>
            <label style="float:left;width=75%; height:20px ; ">itemname </label>
            <label style="clear:both;float:left ;"> ราคาสินค้า : </label>
            <label style="float:left ;">112 ฿</label>
            <label style="clear:both;float:left"> ราคาสินค้า : </label>
            <label style="float:left">112 ฿</label>


         </div>


           <div class="search_data" >
            <label style="float:left;width=20%; height:20px ; ">itemcode : </label>
            <label style="float:left;width=75%; height:20px ; ">itemname </label>
            <label style="clear:both;float:left ;"> ราคาสินค้า : </label>
            <label style="float:left ;">112 ฿</label>
            <label style="clear:both;float:left"> ราคาสินค้า : </label>
            <label style="float:left">112 ฿</label>


         </div>                  
       </div>
      </section>
    <!--   <footer class="modal-card-foot">
        <button class="button is-success">ค้นหา</button>
        <button class="button" @click="closeSitem">ยกเลิก</button>
      </footer> -->
    </div>
  </div>

  </div>

</template>

<script src="../js/quo.js">

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
