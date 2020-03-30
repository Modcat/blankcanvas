package;

import openfl.display.Sprite;

import MyClass;

class Main extends Sprite
{
	public function new()
	{
		super();
	}

	@:expose
	static public function test2():Bool
	{
		return true;
	}
	
	@:expose
	static public function test3():Bool
	{
		return true;
	}
}
