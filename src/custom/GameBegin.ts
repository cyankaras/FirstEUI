class GameBegin extends eui.Component implements  eui.UIComponent {
	public beginButton: eui.Button;
	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		this.init();
	}
	//初始化操作
	private init(){
		//给beginButton绑定事件
		this.beginButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tapHandler, this);
	}
	//响应函数
	private tapHandler(e: egret.TouchEvent){
		alert('点击成功');
	}
	
}