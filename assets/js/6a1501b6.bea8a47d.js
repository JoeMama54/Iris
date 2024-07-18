"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6559],{76717:e=>{e.exports=JSON.parse('{"functions":[],"properties":[{"name":"InputNum","desc":"An input box for numbers. The number can be either an integer or a float.\\n\\n```lua\\nhasChildren = false\\nhasState = true\\nArguments = {\\n    Text: string? = \\"InputNum\\",\\n    Increment: number? = nil,\\n    Min: number? = nil,\\n    Max: number? = nil,\\n    Format: string? | { string }? = [DYNAMIC], -- Iris will dynamically generate an approriate format.\\n    NoButtons: boolean? = false -- whether to display + and - buttons next to the input box.\\n}\\nEvents = {\\n    numberChanged: () -> boolean,\\n    hovered: () -> boolean\\n}\\nStates = {\\n    number: State<number>?,\\n    editingText: State<boolean>?\\n}\\n```\\n    ","lua_type":"Iris.InputNum","tags":["Widget","HasState"],"source":{"line":691,"path":"lib/API.lua"}},{"name":"InputVector2","desc":"An input box for Vector2. The numbers can be either integers or floats.\\n\\n```lua\\nhasChildren = false\\nhasState = true\\nArguments = {\\n    Text: string? = \\"InputVector2\\",\\n    Increment: Vector2? = nil,\\n    Min: Vector2? = nil,\\n    Max: Vector2? = nil,\\n    Format: string? | { string }? = [DYNAMIC] -- Iris will dynamically generate an approriate format.\\n}\\nEvents = {\\n    numberChanged: () -> boolean,\\n    hovered: () -> boolean\\n}\\nStates = {\\n    number: State<Vector2>?,\\n    editingText: State<boolean>?\\n}\\n```\\n    ","lua_type":"Iris.InputVector2","tags":["Widget","HasState"],"source":{"line":721,"path":"lib/API.lua"}},{"name":"InputVector3","desc":"An input box for Vector3. The numbers can be either integers or floats.\\n\\n```lua\\nhasChildren = false\\nhasState = true\\nArguments = {\\n    Text: string? = \\"InputVector3\\",\\n    Increment: Vector3? = nil,\\n    Min: Vector3? = nil,\\n    Max: Vector3? = nil,\\n    Format: string? | { string }? = [DYNAMIC] -- Iris will dynamically generate an approriate format.\\n}\\nEvents = {\\n    numberChanged: () -> boolean,\\n    hovered: () -> boolean\\n}\\nStates = {\\n    number: State<Vector3>?,\\n    editingText: State<boolean>?\\n}\\n```\\n    ","lua_type":"Iris.InputVector3","tags":["Widget","HasState"],"source":{"line":751,"path":"lib/API.lua"}},{"name":"InputUDim","desc":"An input box for UDim. The Scale box will be a float and the Offset box will be\\nan integer, unless specified differently.\\n\\n```lua\\nhasChildren = false\\nhasState = true\\nArguments = {\\n    Text: string? = \\"InputUDim\\",\\n    Increment: UDim? = nil,\\n    Min: UDim? = nil,\\n    Max: UDim? = nil,\\n    Format: string? | { string }? = [DYNAMIC] -- Iris will dynamically generate an approriate format.\\n}\\nEvents = {\\n    numberChanged: () -> boolean,\\n    hovered: () -> boolean\\n}\\nStates = {\\n    number: State<UDim>?,\\n    editingText: State<boolean>?\\n}\\n```\\n    ","lua_type":"Iris.InputUDim","tags":["Widget","HasState"],"source":{"line":782,"path":"lib/API.lua"}},{"name":"InputUDim2","desc":"An input box for UDim2. The Scale boxes will be floats and the Offset boxes will be\\nintegers, unless specified differently.\\n\\n```lua\\nhasChildren = false\\nhasState = true\\nArguments = {\\n    Text: string? = \\"InputUDim2\\",\\n    Increment: UDim2? = nil,\\n    Min: UDim2? = nil,\\n    Max: UDim2? = nil,\\n    Format: string? | { string }? = [DYNAMIC] -- Iris will dynamically generate an approriate format.\\n}\\nEvents = {\\n    numberChanged: () -> boolean,\\n    hovered: () -> boolean\\n}\\nStates = {\\n    number: State<UDim2>?,\\n    editingText: State<boolean>?\\n}\\n```\\n    ","lua_type":"Iris.InputUDim2","tags":["Widget","HasState"],"source":{"line":813,"path":"lib/API.lua"}},{"name":"InputRect","desc":"An input box for Rect. The numbers will default to integers, unless specified differently.\\n\\n```lua\\nhasChildren = false\\nhasState = true\\nArguments = {\\n    Text: string? = \\"InputRect\\",\\n    Increment: Rect? = nil,\\n    Min: Rect? = nil,\\n    Max: Rect? = nil,\\n    Format: string? | { string }? = [DYNAMIC] -- Iris will dynamically generate an approriate format.\\n}\\nEvents = {\\n    numberChanged: () -> boolean,\\n    hovered: () -> boolean\\n}\\nStates = {\\n    number: State<Rect>?,\\n    editingText: State<boolean>?\\n}\\n```\\n    ","lua_type":"Iris.InputRect","tags":["Widget","HasState"],"source":{"line":843,"path":"lib/API.lua"}},{"name":"InputColor3","desc":"An input box for Color3. The input boxes are draggable between 0 and 255 or if UseFloats then between 0 and 1.\\nInput can also be done using HSV instead of the default RGB.\\nIf no format argument is provided then a default R, G, B or H, S, V prefix is applied.\\n\\n```lua\\nhasChildren = false\\nhasState = true\\nArguments = {\\n    Text: string? = \\"InputColor3\\",\\n    UseFloats: boolean? = false, -- constrain the values between floats 0 and 1 or integers 0 and 255.\\n    UseHSV: boolean? = false, -- input using HSV instead.\\n    Format: string? | { string }? = [DYNAMIC] -- Iris will dynamically generate an approriate format.\\n}\\nEvents = {\\n    numberChanged: () -> boolean,\\n    hovered: () -> boolean\\n}\\nStates = {\\n    color: State<Color3>?,\\n    editingText: State<boolean>?\\n}\\n```\\n    ","lua_type":"Iris.InputColor3","tags":["Widget","HasState"],"source":{"line":1080,"path":"lib/API.lua"}},{"name":"InputColor4","desc":"An input box for Color4. Color4 is a combination of Color3 and a fourth transparency argument.\\nIt has two states for this purpose.\\nThe input boxes are draggable between 0 and 255 or if UseFloats then between 0 and 1.\\nInput can also be done using HSV instead of the default RGB.\\nIf no format argument is provided then a default R, G, B, T or H, S, V, T prefix is applied.\\n\\n```lua\\nhasChildren = false\\nhasState = true\\nArguments = {\\n    Text: string? = \\"InputColor4\\",\\n    UseFloats: boolean? = false, -- constrain the values between floats 0 and 1 or integers 0 and 255.\\n    UseHSV: boolean? = false, -- input using HSV instead.\\n    Format: string? | { string }? = [DYNAMIC] -- Iris will dynamically generate an approriate format.\\n}\\nEvents = {\\n    numberChanged: () -> boolean,\\n    hovered: () -> boolean\\n}\\nStates = {\\n    color: State<Color3>?,\\n    transparency: State<number>?,\\n    editingText: State<boolean>?\\n}\\n```\\n    ","lua_type":"Iris.InputColor4","tags":["Widget","HasState"],"source":{"line":1114,"path":"lib/API.lua"}}],"types":[],"name":"Input","desc":"Input Widget API\\n\\nInput Widgets are textboxes for typing in specific number values. See [Drag], [Slider] or [InputText](Text#InputText) for more input types.\\n\\nIris provides a set of specific inputs for the datatypes:\\nNumber,\\n[Vector2](https://create.roblox.com/docs/reference/engine/datatypes/Vector2),\\n[Vector3](https://create.roblox.com/docs/reference/engine/datatypes/Vector3),\\n[UDim](https://create.roblox.com/docs/reference/engine/datatypes/UDim),\\n[UDim2](https://create.roblox.com/docs/reference/engine/datatypes/UDim2),\\n[Rect](https://create.roblox.com/docs/reference/engine/datatypes/Rect),\\n[Color3](https://create.roblox.com/docs/reference/engine/datatypes/Color3)\\nand the custom [Color4](https://create.roblox.com/docs/reference/engine/datatypes/Color3).\\n\\nEach Input widget has the same arguments but the types depend of the DataType:\\n1. Text: string? = \\"Input{type}\\" -- the text to be displayed to the right of the textbox.\\n2. Increment: DataType? = nil, -- the increment argument determines how a value will be rounded once the textbox looses focus.\\n3. Min: DataType? = nil, -- the minimum value that the widget will allow, no clamping by default.\\n4. Max: DataType? = nil, -- the maximum value that the widget will allow, no clamping by default.\\n5. Format: string | { string }? = [DYNAMIC] -- uses `string.format` to customise visual display.\\n\\nThe format string can either by a single value which will apply to every box, or a table allowing specific text.\\n\\n:::note\\nIf you do not specify a format option then Iris will dynamically calculate a relevant number of sigifs and format option.\\nFor example, if you have Increment, Min and Max values of 1, 0 and 100, then Iris will guess that you are only using integers\\nand will format the value as an integer.\\nAs another example, if you have Increment, Min and max values of 0.005, 0, 1, then Iris will guess you are using a float of 3\\nsignificant figures.\\n\\nAdditionally, for certain DataTypes, Iris will append an prefix to each box if no format option is provided.\\nFor example, a Vector3 box will have the append values of \\"X: \\", \\"Y: \\" and \\"Z: \\" to the relevant input box.\\n:::\\n    ","source":{"line":661,"path":"lib/API.lua"}}')}}]);