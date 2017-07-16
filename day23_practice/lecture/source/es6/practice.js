(function(global, $){
'use strict';
if(!$){throw 'jquery에 의존하는 컴포넌트입니다.'}

//비공개 지역함수 
function bind(button){
    // console.log(button._$toggle);    
    button._$toggle.on('click',BindToggle.bind(button._$toggle,button))
    button._$save.on('click',BindSave.bind(button._$save,button))
    button._$edit.on('click',BindEdit.bind(button._$edit,button))
    button._$delete.on('click',BindDelete.bind(button._$delete,button))
}

function BindToggle(button,e){
    //이벤트 기본동작 차단
     e.preventDefault();
     console.log(button);
     button.toggle();
}

function BindSave(button,e){
    //이벤트 기본동작 차단
    e.preventDefault();
    console.log(button);
    button.save();
}

function BindEdit(button,e){
    //이벤트 기본동작 차단
    e.preventDefault();
    console.log(button);
    button.edit();
}

function BindDelete(button,e){
    //이벤트 기본동작 차단
     e.preventDefault();
     console.log(button);
     button.delete();
}



//Constructor
function Card(o){
    //new 강제화 
    if(!this){ throw 'new Card()문법을 사용해주세요.'}
    //전달받을 객체를 제이쿼리화 시킨다.
    this._$card = $(o);
    this.init();
    
    
 

}
//prototype
Card.fn = Card.prototype ={
    constructor : Card,
    init: function(){
        //card 내 버튼 
        this._$toggle = this._$card.find('.card-toggle-btn');
        this._$save   = this._$card.find('.card-save-btn');
        this._$edit   = this._$card.find('.card-edit-btn');
        this._$delete = this._$card.find('.card-delete-btn');
        // card 버튼 이벤트 바인딩
        bind(this);
    },
    save: function(){
        //card 저장

    },
    edit: function(){
        //컨텐츠 내용 수정
    },
    delete: function(){
        //Card 제거
        this._$card.remove()
    },
    
    isOpenedContent: function(){
        //Card 객체 내에 open속성을 포함하고 있는지 확인
        return !this._$toggle.attr('aria-label').includes('open');
    },
    isOpen: function(){
        
        //Toggle-btn 의 찾아 aria-label  close 를 open 으로 바꾼다.
        var close_to_open = this._$toggle.attr('aria-label').replace('open','close');
        this._$toggle.attr('aria-label',close_to_open);
        //fa-angle-up에 fa-angle-down클래스를 추가한 뒤 fa-angle-up 클래스를 지운다. 
        this._$toggle.find('.fa-angle-up').addClass('fa-angle-down').removeClass('fa-angle-up');
        //컨텐츠를 보여준다.
        console.log('열렸다!');
        this._$card.find('.card-content').slideDown(100);
    },
    isClose: function(){
        //Toggle-btn 의 찾아 aria-label  open 를 close 으로 바꾼다.
        var open_to_close = this._$toggle.attr('aria-label').replace('close','open');
        this._$toggle.attr('aria-label',open_to_close);
        //fa-angle-down에 fa-angle-up 클래스를 추가한 뒤 fa-angle-down 클래스를 지운다. 
        this._$toggle.find('.fa-angle-down').addClass('fa-angle-up').removeClass('fa-angle-down');
        //컨텐츠을 닫는다.
        console.log('닫혔다!');
        this._$card.find('.card-content').slideUp(100);
    },
    toggle: function(){
        //토글 
        this.isOpenedContent() ? this.isClose() : this.isOpen();
    }

}
//Export
$.Card = Card;

})(window,window.jQuery);

(function(global, $){
'use strict';

  global.t_card = new $.Card('.twitter-card');
  global.f_card =  new $.Card('.facebook-card');
  global.i_card = new $.Card('.instagram-card');

})(window,window.jQuery);


