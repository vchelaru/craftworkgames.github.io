"use strict";(self.webpackChunkmonogame_extended_website=self.webpackChunkmonogame_extended_website||[]).push([[899],{4746:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>c});var r=n(4848),o=n(8453);const t={id:"particles",title:"Particles",sidebar_label:"Particles"},l=void 0,s={id:"features/particles/particles",title:"Particles",description:"MonoGame.Extended.Particles is ported from the Mercury Particle Engine.",source:"@site/docs/features/particles/particles.md",sourceDirName:"features/particles",slug:"/features/particles/",permalink:"/docs/features/particles/",draft:!1,unlisted:!1,editUrl:"https://github.com/craftworkgames/craftworkgames.github.io/tree/develop/docs/features/particles/particles.md",tags:[],version:"current",frontMatter:{id:"particles",title:"Particles",sidebar_label:"Particles"},sidebar:"docs",previous:{title:"Scene Graphs",permalink:"/docs/features/scene-graphs/"},next:{title:"Object Pooling",permalink:"/docs/features/object-pooling/"}},d={},c=[{value:"Installation",id:"installation",level:2},{value:"Quick start",id:"quick-start",level:2},{value:"Profiles",id:"profiles",level:2},{value:"CircleProfile",id:"circleprofile",level:3},{value:"<code>CircleRadiation</code>",id:"circleradiation",level:4},{value:"PointProfile",id:"pointprofile",level:3},{value:"BoxProfile",id:"boxprofile",level:3},{value:"BoxUniformProfile",id:"boxuniformprofile",level:3},{value:"BoxFillProfile",id:"boxfillprofile",level:3},{value:"LineProfile",id:"lineprofile",level:3},{value:"RingProfile",id:"ringprofile",level:3},{value:"<code>CircleRadiation</code>",id:"circleradiation-1",level:4},{value:"SprayProfile",id:"sprayprofile",level:3},{value:"Modifiers",id:"modifiers",level:2},{value:"AgeModifier",id:"agemodifier",level:3},{value:"CircleContainerModifier",id:"circlecontainermodifier",level:3},{value:"<code>Radius</code>",id:"radius",level:4},{value:"<code>Inside</code>",id:"inside",level:4},{value:"<code>RestitutionCoefficient</code>",id:"restitutioncoefficient",level:4},{value:"RectangleContainerModifier",id:"rectanglecontainermodifier",level:3},{value:"<code>Width</code>",id:"width",level:4},{value:"<code>Height</code>",id:"height",level:4},{value:"<code>RestitutionCoefficient</code>",id:"restitutioncoefficient-1",level:4},{value:"RectangleLoopContainerModifier",id:"rectangleloopcontainermodifier",level:3},{value:"<code>Width</code>",id:"width-1",level:4},{value:"<code>Height</code>",id:"height-1",level:4},{value:"DragModifier",id:"dragmodifier",level:3},{value:"<code>DragCoefficient</code>",id:"dragcoefficient",level:4},{value:"<code>Density</code>",id:"density",level:4},{value:"LinearGravityModifier",id:"lineargravitymodifier",level:3},{value:"<code>Direction</code>",id:"direction",level:4},{value:"<code>Strength</code>",id:"strength",level:4},{value:"OpacityFastFadeModifier",id:"opacityfastfademodifier",level:3},{value:"RotationModifier",id:"rotationmodifier",level:3},{value:"VelocityColorModifier",id:"velocitycolormodifier",level:3},{value:"<code>StationaryColor</code>",id:"stationarycolor",level:4},{value:"<code>VelocityColor</code>",id:"velocitycolor",level:4},{value:"<code>VelocityThreshold</code>",id:"velocitythreshold",level:4},{value:"VelocityModifier",id:"velocitymodifier",level:3},{value:"VortexModifier",id:"vortexmodifier",level:3},{value:"<code>Mass</code>",id:"mass",level:4},{value:"<code>Position</code>",id:"position",level:4},{value:"Interpolators",id:"interpolators",level:2},{value:"ColorInterpolator",id:"colorinterpolator",level:3},{value:"HueInterpolator",id:"hueinterpolator",level:3},{value:"OpacityInterpolator",id:"opacityinterpolator",level:3},{value:"RotationInterpolator",id:"rotationinterpolator",level:3},{value:"ScaleInterpolator",id:"scaleinterpolator",level:3}];function a(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.p,{children:"MonoGame.Extended.Particles is ported from the Mercury Particle Engine.\nA particle engine helps you simulate phenomena, which are otherwise very hard to reproduce with conventional rendering techniques. examples include replicating fire, explosions, smoke, moving water, sparks."}),"\n",(0,r.jsx)(i.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.a,{href:"https://www.nuget.org/packages/MonoGame.Extended.Particles",children:"MonoGame.Extended.Particles"})," is distributed via a NuGet package. You can add the NuGet package to your C# project through your IDE of choice (Visual Studio, Xamarin Studio, Rider, etc) or through the Command Line Interface (CLI) using the dotnet command."]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:"dotnet add package MonoGame.Extended.Particles\n"})}),"\n",(0,r.jsx)(i.h2,{id:"quick-start",children:"Quick start"}),"\n",(0,r.jsx)(i.p,{children:"We start by including the required namespaces."}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-cs",children:"using MonoGame.Extended;\nusing MonoGame.Extended.Particles;\nusing MonoGame.Extended.Particles.Modifiers;\nusing MonoGame.Extended.Particles.Modifiers.Containers;\nusing MonoGame.Extended.Particles.Modifiers.Interpolators;\nusing MonoGame.Extended.Particles.Profiles;\nusing MonoGame.Extended.TextureAtlases;\n"})}),"\n",(0,r.jsxs)(i.p,{children:["Next, we declare our ",(0,r.jsx)(i.code,{children:"ParticleEffect"})," and ",(0,r.jsx)(i.code,{children:"Texture2D"})," fields"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-cs",children:"private ParticleEffect _particleEffect;\nprivate Texture2D _particleTexture;\n"})}),"\n",(0,r.jsxs)(i.p,{children:["Which we assign in the ",(0,r.jsx)(i.code,{children:"LoadContent"})," function"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-cs",children:"_particleTexture = new Texture2D(GraphicsDevice, 1, 1);\n_particleTexture.SetData(new[] { Color.White });\n\nTextureRegion2D textureRegion = new TextureRegion2D(_particleTexture);\n_particleEffect = new ParticleEffect(autoTrigger: false)\n{\n    Position = new Vector2(400, 240),\n    Emitters = new List<ParticleEmitter>\n    {\n        new ParticleEmitter(textureRegion, 500, TimeSpan.FromSeconds(2.5),\n            Profile.BoxUniform(100,250))\n        {\n            Parameters = new ParticleReleaseParameters\n            {\n                Speed = new Range<float>(0f, 50f),\n                Quantity = 3,\n                Rotation = new Range<float>(-1f, 1f),\n                Scale = new Range<float>(3.0f, 4.0f)\n            },\n            Modifiers =\n            {\n                new AgeModifier\n                {\n                    Interpolators =\n                    {\n                        new ColorInterpolator\n                        {\n                            StartValue = new HslColor(0.33f, 0.5f, 0.5f),\n                            EndValue = new HslColor(0.5f, 0.9f, 1.0f)\n                        }\n                    }\n                },\n                new RotationModifier {RotationRate = -2.1f},\n                new RectangleContainerModifier {Width = 800, Height = 480},\n                new LinearGravityModifier {Direction = -Vector2.UnitY, Strength = 30f},\n            }\n        }\n    }\n};\n"})}),"\n",(0,r.jsxs)(i.p,{children:["Since ",(0,r.jsx)(i.code,{children:"_particleTexture"})," and ",(0,r.jsx)(i.code,{children:"_particleEffect"})," are not loaded with the ",(0,r.jsx)(i.code,{children:"ContentManager"}),", we need to dispose them in ",(0,r.jsx)(i.code,{children:"UnloadContent"}),"."]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-cs",children:"_particleTexture.Dispose();\n_particleEffect.Dispose();\n"})}),"\n",(0,r.jsxs)(i.p,{children:["Finaly, we add implement ",(0,r.jsx)(i.code,{children:"Update"})," and ",(0,r.jsx)(i.code,{children:"Draw"})]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-cs",children:"protected override void Update(GameTime gameTime)\n{\n    _particleEffect.Update((float)gameTime.ElapsedGameTime.TotalSeconds);\n    base.Update(gameTime);\n}\n\nprotected override void Draw(GameTime gameTime)\n{\n    GraphicsDevice.Clear(Color.Black);\n\n    _spriteBatch.Begin(blendState: BlendState.AlphaBlend);\n    _spriteBatch.Draw(_particleEffect);\n    _spriteBatch.End();\n\n    base.Draw(gameTime);\n}\n"})}),"\n",(0,r.jsx)(i.h2,{id:"profiles",children:"Profiles"}),"\n",(0,r.jsx)(i.p,{children:"Profiles determine how the particles are distributed"}),"\n",(0,r.jsx)(i.h3,{id:"circleprofile",children:"CircleProfile"}),"\n",(0,r.jsx)(i.p,{children:"The Circle profile distributes the particles within a circle"}),"\n",(0,r.jsx)(i.h4,{id:"circleradiation",children:(0,r.jsx)(i.code,{children:"CircleRadiation"})}),"\n",(0,r.jsx)(i.p,{children:"Determines the heading direction of the particles"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Code"})}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-cs",children:"Profile.Circle(150, Profile.CircleRadiation.In)\n"})}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"circleProfileIn",src:n(7092).A+"",width:"350",height:"350"})}),"\n",(0,r.jsx)(i.h3,{id:"pointprofile",children:"PointProfile"}),"\n",(0,r.jsx)(i.p,{children:"The Point profile distributes the particles at the same point"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Code"})}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-cs",children:"Profile.Point()\n"})}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"PointProfile",src:n(8159).A+"",width:"350",height:"350"})}),"\n",(0,r.jsx)(i.h3,{id:"boxprofile",children:"BoxProfile"}),"\n",(0,r.jsx)(i.p,{children:"The Box profile distributes the particles over the edge of a box"}),"\n",(0,r.jsx)(i.admonition,{type:"note",children:(0,r.jsx)(i.p,{children:"The box profile distributed 25% of the particle on each edge.\nIf you have a rectangular shape and you want an even distribution, use the BoxUniform profile"})}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Code"})}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-cs",children:"Profile.Box(150,150)\n"})}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"BoxProfile",src:n(9280).A+"",width:"350",height:"350"})}),"\n",(0,r.jsx)(i.h3,{id:"boxuniformprofile",children:"BoxUniformProfile"}),"\n",(0,r.jsx)(i.p,{children:"The BoxUniform profile evenly distributes the particles over the edge of a box"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Code"})}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-cs",children:"Profile.BoxUniform(150,300)\n"})}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"BoxUniformProfile",src:n(6258).A+"",width:"350",height:"350"})}),"\n",(0,r.jsx)(i.h3,{id:"boxfillprofile",children:"BoxFillProfile"}),"\n",(0,r.jsx)(i.p,{children:"The BoxFill profile distributes the particles within a box"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Code"})}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-cs",children:"Profile.BoxFill(150,150)\n"})}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"BoxFillProfile",src:n(4281).A+"",width:"350",height:"350"})}),"\n",(0,r.jsx)(i.h3,{id:"lineprofile",children:"LineProfile"}),"\n",(0,r.jsx)(i.p,{children:"The Line profile distributes the particles over a line"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Code"})}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-cs",children:"Profile.Line(new Vector2(1,1), 150)\n"})}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"LineProfile",src:n(2491).A+"",width:"350",height:"350"})}),"\n",(0,r.jsx)(i.h3,{id:"ringprofile",children:"RingProfile"}),"\n",(0,r.jsx)(i.p,{children:"The Ring profile distributes the particles over a line"}),"\n",(0,r.jsx)(i.h4,{id:"circleradiation-1",children:(0,r.jsx)(i.code,{children:"CircleRadiation"})}),"\n",(0,r.jsx)(i.p,{children:"Determines the heading direction of the particles"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Code"})}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-cs",children:"Profile.Ring(150, Profile.CircleRadiation.In)\n"})}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"RingProfile",src:n(5963).A+"",width:"350",height:"350"})}),"\n",(0,r.jsx)(i.h3,{id:"sprayprofile",children:"SprayProfile"}),"\n",(0,r.jsx)(i.p,{children:"The Spray profile prays the particles in a given direction"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Code"})}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-cs",children:"Profile.Spray(new Vector2(1,1), 2f )\n"})}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"SprayProfile",src:n(5068).A+"",width:"350",height:"350"})}),"\n",(0,r.jsx)(i.h2,{id:"modifiers",children:"Modifiers"}),"\n",(0,r.jsx)(i.h3,{id:"agemodifier",children:"AgeModifier"}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.code,{children:"AgeModifier"})," Uses Interpolators to modify the particle over its lifespan."]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Code"})}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-cs",children:"new AgeModifier\n{\n    Interpolators =\n    {\n        new ColorInterpolator\n        {\n            StartValue = Color.Yellow.ToHsl(),\n            EndValue = Color.Blue.ToHsl()\n        }\n    }\n}\n"})}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Result"})}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"AgeModifier",src:n(5056).A+"",width:"350",height:"350"})}),"\n",(0,r.jsx)(i.h3,{id:"circlecontainermodifier",children:"CircleContainerModifier"}),"\n",(0,r.jsx)(i.p,{children:"This Modifier makes the particles collide with a circle container."}),"\n",(0,r.jsx)(i.h4,{id:"radius",children:(0,r.jsx)(i.code,{children:"Radius"})}),"\n",(0,r.jsxs)(i.p,{children:["The radius of the ",(0,r.jsx)(i.code,{children:"CircleContainer"}),"."]}),"\n",(0,r.jsx)(i.h4,{id:"inside",children:(0,r.jsx)(i.code,{children:"Inside"})}),"\n",(0,r.jsx)(i.p,{children:"Whether the particles should stay inside the of outside the container"}),"\n",(0,r.jsx)(i.h4,{id:"restitutioncoefficient",children:(0,r.jsx)(i.code,{children:"RestitutionCoefficient"})}),"\n",(0,r.jsx)(i.p,{children:"The bounces back force of the particles"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Code"})}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-cs",children:"new CircleContainerModifier()\n{\n    Radius = 50,\n    Inside = true,\n    RestitutionCoefficient = 0.2f\n}\n"})}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Result"})}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"CircleContainerModifier",src:n(9964).A+"",width:"350",height:"350"})}),"\n",(0,r.jsx)(i.h3,{id:"rectanglecontainermodifier",children:"RectangleContainerModifier"}),"\n",(0,r.jsx)(i.p,{children:"This Modifier makes the particles collide with a rectangle container."}),"\n",(0,r.jsx)(i.h4,{id:"width",children:(0,r.jsx)(i.code,{children:"Width"})}),"\n",(0,r.jsx)(i.p,{children:"Width of the container"}),"\n",(0,r.jsx)(i.h4,{id:"height",children:(0,r.jsx)(i.code,{children:"Height"})}),"\n",(0,r.jsx)(i.p,{children:"Height of the container"}),"\n",(0,r.jsx)(i.h4,{id:"restitutioncoefficient-1",children:(0,r.jsx)(i.code,{children:"RestitutionCoefficient"})}),"\n",(0,r.jsx)(i.p,{children:"The bounces back force of the particles"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Code"})}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-cs",children:"new RectangleContainerModifier\n{\n    Width = 150,\n    Height = 150,\n    RestitutionCoefficient = 0.2f,\n}\n"})}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Result"})}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"RectangleContainerModifier",src:n(689).A+"",width:"350",height:"350"})}),"\n",(0,r.jsx)(i.h3,{id:"rectangleloopcontainermodifier",children:"RectangleLoopContainerModifier"}),"\n",(0,r.jsx)(i.p,{children:"This Modifier keeps the particles inside a rectangular container by looping them around."}),"\n",(0,r.jsx)(i.h4,{id:"width-1",children:(0,r.jsx)(i.code,{children:"Width"})}),"\n",(0,r.jsx)(i.p,{children:"Width of the container"}),"\n",(0,r.jsx)(i.h4,{id:"height-1",children:(0,r.jsx)(i.code,{children:"Height"})}),"\n",(0,r.jsx)(i.p,{children:"Height of the container"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Code"})}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-cs",children:"new RectangleLoopContainerModifier\n{\n    Width = 150,\n    Height = 150\n}\n"})}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Result"})}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"RectangleLoopContainerModifier",src:n(4867).A+"",width:"350",height:"350"})}),"\n",(0,r.jsx)(i.h3,{id:"dragmodifier",children:"DragModifier"}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.code,{children:"DragModifier"})," simulates the effects of the particle passing through a medium such as water, air, etc., which exert a force (drag) which slows the particles down."]}),"\n",(0,r.jsx)(i.h4,{id:"dragcoefficient",children:(0,r.jsx)(i.code,{children:"DragCoefficient"})}),"\n",(0,r.jsx)(i.p,{children:"The drag coefficient of the particle."}),"\n",(0,r.jsx)(i.h4,{id:"density",children:(0,r.jsx)(i.code,{children:"Density"})}),"\n",(0,r.jsx)(i.p,{children:"The density of the medium through which the particle is moving."}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Code"})}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-cs",children:"new DragModifier\n{\n    Density = 1f, DragCoefficient = 1f\n}\n"})}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Result"})}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"DragModifier",src:n(6411).A+"",width:"350",height:"350"})}),"\n",(0,r.jsx)(i.h3,{id:"lineargravitymodifier",children:"LinearGravityModifier"}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.code,{children:"LinearGravityModifier"})," applies linear gravity to the particle"]}),"\n",(0,r.jsx)(i.h4,{id:"direction",children:(0,r.jsx)(i.code,{children:"Direction"})}),"\n",(0,r.jsx)(i.p,{children:"The direction of gravity."}),"\n",(0,r.jsx)(i.h4,{id:"strength",children:(0,r.jsx)(i.code,{children:"Strength"})}),"\n",(0,r.jsx)(i.p,{children:"Strength of the gravity"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Code"})}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-cs",children:"new LinearGravityModifier\n{\n    Direction = new Vector2(0,-1), \n    Strength = 30f\n}\n"})}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Result"})}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"DragModifier",src:n(1018).A+"",width:"350",height:"350"})}),"\n",(0,r.jsx)(i.h3,{id:"opacityfastfademodifier",children:"OpacityFastFadeModifier"}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.code,{children:"OpacityFastFadeModifier"})," fades the particles over the span of their lifetime"]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Code"})}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-cs",children:"new OpacityFastFadeModifier()\n"})}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Result"})}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"DragModifier",src:n(2834).A+"",width:"350",height:"350"})}),"\n",(0,r.jsx)(i.h3,{id:"rotationmodifier",children:"RotationModifier"}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.code,{children:"RotationModifier"})," rotates the particles by a given ",(0,r.jsx)(i.code,{children:"RotationRate"})]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Code"})}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-cs",children:"new RotationModifier\n{\n    RotationRate = 5f\n}\n"})}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Result"})}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"RotationModifier",src:n(7903).A+"",width:"350",height:"350"})}),"\n",(0,r.jsx)(i.h3,{id:"velocitycolormodifier",children:"VelocityColorModifier"}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.code,{children:"VelocityColorModifier"})," Colors the particle by its velocity"]}),"\n",(0,r.jsx)(i.h4,{id:"stationarycolor",children:(0,r.jsx)(i.code,{children:"StationaryColor"})}),"\n",(0,r.jsx)(i.p,{children:"The color when the velocity is 0"}),"\n",(0,r.jsx)(i.h4,{id:"velocitycolor",children:(0,r.jsx)(i.code,{children:"VelocityColor"})}),"\n",(0,r.jsx)(i.p,{children:"The particle color when it reaches the VelocityThreshold"}),"\n",(0,r.jsx)(i.h4,{id:"velocitythreshold",children:(0,r.jsx)(i.code,{children:"VelocityThreshold"})}),"\n",(0,r.jsx)(i.p,{children:"The threshold of the velocity"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Code"})}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-cs",children:"new VelocityColorModifier\n{\n    StationaryColor = Color.Green.ToHsl(),\n    VelocityColor = Color.Blue.ToHsl(),\n    VelocityThreshold = 80f\n}\n"})}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Result"})}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"VelocityColorModifier",src:n(9187).A+"",width:"350",height:"350"})}),"\n",(0,r.jsx)(i.h3,{id:"velocitymodifier",children:"VelocityModifier"}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.code,{children:"VelocityModifier"})," Uses ",(0,r.jsx)(i.code,{children:"Interpolators"})," to modify the particles depending on their velocity."]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Code"})}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-cs",children:"new VelocityModifier()\n{\n    Interpolators =\n    {\n        new ColorInterpolator\n        {\n            StartValue = Color.Green.ToHsl(),\n            EndValue = Color.Blue.ToHsl()\n        }\n    },\n    VelocityThreshold = 80f\n}\n"})}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Result"})}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"VelocityModifier",src:n(5812).A+"",width:"350",height:"350"})}),"\n",(0,r.jsx)(i.h3,{id:"vortexmodifier",children:"VortexModifier"}),"\n",(0,r.jsxs)(i.p,{children:["This ",(0,r.jsx)(i.code,{children:"VortexModifier"})," moves the particles in a whirling vortex. This can be used for creating wind effects, etc."]}),"\n",(0,r.jsx)(i.h4,{id:"mass",children:(0,r.jsx)(i.code,{children:"Mass"})}),"\n",(0,r.jsx)(i.p,{children:"The mass of the vortex"}),"\n",(0,r.jsx)(i.h4,{id:"position",children:(0,r.jsx)(i.code,{children:"Position"})}),"\n",(0,r.jsxs)(i.p,{children:["The position of the vortex relative to the ",(0,r.jsx)(i.code,{children:"ParticleEmitter"})]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Code"})}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-cs",children:"new VortexModifier()\n{\n    Mass = 10f,\n    MaxSpeed = 1f,\n    Position = new Vector2(0,-150)\n},\nnew VortexModifier()\n{\n    Mass = 10f,\n    MaxSpeed = 1f,\n    Position = new Vector2(-150,0)\n}\n"})}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Result"})}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"VortexModifier",src:n(9829).A+"",width:"350",height:"350"})}),"\n",(0,r.jsx)(i.h2,{id:"interpolators",children:"Interpolators"}),"\n",(0,r.jsxs)(i.p,{children:["Interpolators are used by ",(0,r.jsx)(i.code,{children:"AgeModifier"})," and ",(0,r.jsx)(i.code,{children:"VelocityModifier"})," to interpolate particle properties"]}),"\n",(0,r.jsx)(i.h3,{id:"colorinterpolator",children:"ColorInterpolator"}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.code,{children:"ColorInterpolator"})," Interpolates from a Start to an End color."]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Code"})}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-cs",children:"new AgeModifier\n{\n    Interpolators =\n    {\n        new ColorInterpolator\n        {\n            StartValue = Color.Yellow.ToHsl(),\n            EndValue = Color.Blue.ToHsl()\n        }\n    }\n}\n"})}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Result"})}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"ColorInterpolator",src:n(8500).A+"",width:"350",height:"350"})}),"\n",(0,r.jsx)(i.h3,{id:"hueinterpolator",children:"HueInterpolator"}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.code,{children:"HueInterpolator"})," Interpolates from a Start to an End Hue."]}),"\n",(0,r.jsx)(i.admonition,{type:"note",children:(0,r.jsx)(i.p,{children:"Make sure to set the particle color"})}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Code"})}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-cs",children:"new AgeModifier()\n{\n    Interpolators = new List<Interpolator>()\n    {\n        new HueInterpolator { StartValue = 0f, EndValue = 360f }\n    }\n}\n"})}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Result"})}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"HueInterpolator",src:n(5495).A+"",width:"350",height:"350"})}),"\n",(0,r.jsx)(i.h3,{id:"opacityinterpolator",children:"OpacityInterpolator"}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.code,{children:"OpacityInterpolator"})," Interpolates from a Start to an End Opacity."]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Code"})}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-cs",children:"new AgeModifier()\n{\n    Interpolators = new List<Interpolator>()\n    {\n        new OpacityInterpolator { StartValue = -2f, EndValue = 1f }\n    }\n}\n"})}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Result"})}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"OpacityInterpolator",src:n(286).A+"",width:"350",height:"350"})}),"\n",(0,r.jsx)(i.h3,{id:"rotationinterpolator",children:"RotationInterpolator"}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.code,{children:"RotationInterpolator"})," Interpolates from a Start to an End Rotation."]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Code"})}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-cs",children:"new AgeModifier()\n{\n    Interpolators = new List<Interpolator>()\n    {\n        new RotationInterpolator { StartValue = 0f, EndValue = 5f }\n    }\n}\n"})}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Result"})}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"RotationInterpolator",src:n(227).A+"",width:"350",height:"350"})}),"\n",(0,r.jsx)(i.h3,{id:"scaleinterpolator",children:"ScaleInterpolator"}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.code,{children:"ScaleInterpolator"})," Interpolates from a Start to an End Scale."]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Code"})}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-cs",children:"new AgeModifier()\n{\n    Interpolators = new List<Interpolator>()\n    {\n        new ScaleInterpolator { StartValue = new Vector2(1,1), EndValue = new Vector2(10,10) }\n    }\n}\n"})}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Result"})}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"ScaleInterpolator",src:n(3931).A+"",width:"350",height:"350"})})]})}function h(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},6258:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/BoxUniformProfile-8ce8d55654ce421d8d57dc43c2e90a61.gif"},3931:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/ScaleInterpolator-3a665a3a186d9e4e3262fb60d3ca9eac.gif"},5056:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/ageModifier-18104239f8f19daa890a52434340131e.gif"},4281:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/boxFillProfile-4feadf899ee7a5aa31a81d6a8e57319b.gif"},9280:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/boxProfile-540ad2962a660dcca2289429a839050b.gif"},9964:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/circleContainerModifier-198bf1e28e277aeebf950ec48ec4bc90.gif"},7092:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/circleProfileIn-06bc48db4b295e0239f9cba2b057bf93.gif"},8500:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/colorInterpolator-6cb8308eae68296ae7b0cd28468f8296.gif"},6411:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/dragModifier-9600c9b328d686680402af8f249d1a91.gif"},5495:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/hueInterpolator-74e1426647b525a28b6bbb85872660c0.gif"},2491:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/lineProfile-57f461a381fc72e32800fe6cd015c2ae.gif"},1018:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/linearGravityModifier-12debe2454092c1dc3ba1b2ba374592e.gif"},2834:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/opacityFastFadeModifier-f68ac0ef5f5ccaaa1a0dcf46b91750f5.gif"},286:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/opacityInterpolator-c5949006d43f3a1fd9a2c0305cbf82a5.gif"},8159:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/pointProfile-c547b80b1cffee56cecde458c19090ac.gif"},689:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/rectangleContainerModifier-1025012144954808ca9927e3d343708e.gif"},4867:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/rectangleLoopContainerModifier-aaa83817b01667d2f2e202e839cfd041.gif"},5963:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/ringProfile-40c653ce2743e83b99bef5b28fca3c21.gif"},227:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/rotationInterpolator-0c947beba4eb84d8ee9a496fc6156aac.gif"},7903:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/rotationModifier-9b8458de1d976af71efdd851a28ca0dc.gif"},5068:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/sprayProfile-7ef81c702c5f11888bbda93eeba85fb9.gif"},9187:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/velocityColorModifier-e1f378ed897ab16a102c80b6960b2615.gif"},5812:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/velocityModifier-7896932f5ba4bfbb023d332d160f5371.gif"},9829:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/vortexModifier-cfa66b1fd9b8b02c0fcf501fe7901321.gif"},8453:(e,i,n)=>{n.d(i,{R:()=>l,x:()=>s});var r=n(6540);const o={},t=r.createContext(o);function l(e){const i=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),r.createElement(t.Provider,{value:i},e.children)}}}]);