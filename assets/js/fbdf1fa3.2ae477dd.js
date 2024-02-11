"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3655],{10343:e=>{e.exports=JSON.parse('{"functions":[],"properties":[{"name":"Separator","desc":"A vertical or horizonal line, depending on the context, which visually seperates widgets.\\n\\n```lua\\nhasChildren = false\\nhasState = false\\n```\\n    ","lua_type":"Iris.Separator","tags":["Widget"],"source":{"line":248,"path":"lib/API.lua"}},{"name":"Indent","desc":"Indents its child widgets.\\n\\n```lua\\nhasChildren = true\\nhasState = false\\nArguments = {\\n    Width: number? = Iris._config.IndentSpacing -- indent width ammount.\\n}\\n```\\n    ","lua_type":"Iris.Indent","tags":["Widget","HasChildren"],"source":{"line":266,"path":"lib/API.lua"}},{"name":"Sameline","desc":"Positions its children in a row, horizontally.\\n\\n```lua\\nhasChildren = true\\nhasState = false\\nArguments = {\\n    Width: number? = Iris._config.ItemSpacing.X, -- horizontal spacing between child widgets.\\n    VerticalAlignment: Enum.VerticalAlignment? = Enum.VerticalAlignment.Center -- how widgets are aligned to the widget.\\n}\\n```\\n    ","lua_type":"Iris.Sameline","tags":["Widget","HasChildren"],"source":{"line":285,"path":"lib/API.lua"}},{"name":"Group","desc":"Layout widget which contains its children as a single group.\\n\\n```lua\\nhasChildren = true\\nhasState = false\\n```\\n    ","lua_type":"Iris.Group","tags":["Widget","HasChildren"],"source":{"line":300,"path":"lib/API.lua"}}],"types":[],"name":"Format","desc":"Format API\\n    ","source":{"line":235,"path":"lib/API.lua"}}')}}]);