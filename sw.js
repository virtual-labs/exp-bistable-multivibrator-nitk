importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"53b8e50f782f63519dc05b76bd1d9c49","url":"assets/css/toast.css"},{"revision":"6d9501ec2a9a6e52b90a8d27340202b6","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"1eb55c09b5d84050d497a664520d2255","url":"assets/js/assessment_v2.js"},{"revision":"31ecd36dd9f2e26b04f3795097445547","url":"assets/js/assessment.js"},{"revision":"5000362f34eee7667adb9dbd883f2217","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"e3a3b0986b1f4213ca333008465d2bef","url":"contributors.html"},{"revision":"1d7edc130c677b3dbdec2be90b5784d9","url":"feedback.html"},{"revision":"100b6e648b9d39d694cd58bd70ad69dc","url":"images/bform1.png"},{"revision":"3ef2c2c86d262a52d143cc31920f547c","url":"images/bform2.png"},{"revision":"cae3791cd0813ba92623113ac4ea4055","url":"images/bform3.png"},{"revision":"8a35404e3ae9fd1390486c3be6282645","url":"images/bform4.png"},{"revision":"06c4a99185b1e983719d89ed4f0c4cf4","url":"images/bform5.png"},{"revision":"4b82adad99510957bc267b959efc3a4a","url":"images/bform6.png"},{"revision":"f0c5aac0d550090d7c78d156b9a5198d","url":"images/bform7.png"},{"revision":"ed14ff6170ceba5695d12c57b2a3f0df","url":"images/bform8.png"},{"revision":"9f7d78c6d406e44791421015119b5f27","url":"images/bform9.png"},{"revision":"b162ca72e62b5d6b45a2f53e0c8593a3","url":"images/biformula.png"},{"revision":"a8fe65228c360b918d25e49916a7aa51","url":"images/biformula1.png"},{"revision":"cf5e84e65420a2b4881eaea84ed97de4","url":"images/biformula2.png"},{"revision":"26a1454e111d9f404b6151b59d31d21f","url":"images/biformula3.png"},{"revision":"814cf50817d28b3ad38d82ee832ffe4f","url":"images/bistable.png"},{"revision":"9f052af3089e00a3a4920230e81a33c5","url":"images/equation1.png"},{"revision":"0c470d25e6800705b8d348d4f1222b90","url":"images/equation2.png"},{"revision":"104a50d8df2950da360fcc1e83eeec15","url":"images/equation3.png"},{"revision":"4777d84d9148b7ae2fd5c00de39e60d1","url":"images/fm1.png"},{"revision":"6522a1fe33e005200b637176d8d8e8d2","url":"images/fm2.png"},{"revision":"934e8e78385f886b34a7ddb7c9875700","url":"images/fm3.png"},{"revision":"15903f023f812a5efb9b57b451c77297","url":"images/fm4.png"},{"revision":"6b9c6aa562630f514f61d01abc4f60b2","url":"images/formula1.png"},{"revision":"deb30d1c0df7a1dc86df5b95e0a84c70","url":"images/formula2.png"},{"revision":"92c25f4ba83986980d63997f724c0e57","url":"images/formula3.png"},{"revision":"4715283028bf560130f3daf1b3e3415e","url":"images/formula4.png"},{"revision":"25a9f7df313333b9728fbdd997c88ec2","url":"images/formula5.png"},{"revision":"104a50d8df2950da360fcc1e83eeec15","url":"images/formula6.png"},{"revision":"ad3e31450cdd207cb342ce8a31c6a7d0","url":"images/formula7.png"},{"revision":"365409cdae828ad50ade7fe8567dd507","url":"images/formula8.png"},{"revision":"66fd198f1aa7c31e1de07fd7c9b60884","url":"images/img1.jpg"},{"revision":"300ce02ed2afb0f607ec3aaa7e71770b","url":"images/img2.png"},{"revision":"b54180b003a83551e65fa647a83729d8","url":"images/img3.png"},{"revision":"21360c2f138a5c2867b8ba2ca45dbf7b","url":"images/monostable.png"},{"revision":"827f4f97f1c373ca3ce380b4762e48e6","url":"images/vinitial.png"},{"revision":"ed17306cda12de29bcb202a5e841ab28","url":"images/vsatnegative.png"},{"revision":"e732424b69e00b7b46be224220b64951","url":"index.html"},{"revision":"f7f122e55174b700c1f24084b901ad39","url":"performance-report.html"},{"revision":"914e243a5d6373b22585e9bdd0c25eef","url":"plugins/svc-rating/checkEventSubmission.js"},{"revision":"e99077e253b07129d0b9755e6a06f93f","url":"plugins/svc-rating/config.js"},{"revision":"40bc0d089f560247a1bfb0cd151232ad","url":"plugins/svc-rating/imageData.js"},{"revision":"a47af25e8d8500c59a6c26bac42a0cd9","url":"plugins/svc-rating/images/empty-star.svg"},{"revision":"6ad37561267a21d6bcb558f9c7c3fe8a","url":"plugins/svc-rating/images/half-star.svg"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"plugins/svc-rating/images/logo.jpg"},{"revision":"f2be5f1d57e0a2c690e34cf9095bed16","url":"plugins/svc-rating/images/mobile_rating_icon.png"},{"revision":"17c8ce8f2faa7937f7978a4dfb69df3a","url":"plugins/svc-rating/images/mobile-icon.svg"},{"revision":"96102a862f070a61a20193b621188ef3","url":"plugins/svc-rating/images/star.svg"},{"revision":"e083f28aa9e5a670a2e5de02197c261f","url":"plugins/svc-rating/index.html"},{"revision":"db18c05646b11f1fa66ef3ebb87116ca","url":"plugins/svc-rating/index.js"},{"revision":"fdc8b6772fb88081e86497fd2f75e20b","url":"plugins/svc-rating/package-lock.json"},{"revision":"7039ff00a75fd32443048e6ed0020a91","url":"plugins/svc-rating/package.json"},{"revision":"1ed592c19b20d396536ebd3611f3ef40","url":"plugins/svc-rating/rating-display.js"},{"revision":"0267f54f7993bcd47793dd7f7be56c92","url":"plugins/svc-rating/rating-submit.js"},{"revision":"57e53998ce85ab911eea27fdc421480d","url":"plugins/svc-rating/rating.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"ae268ef41825fc9afb55bcb6fa3f0770","url":"posttest.html"},{"revision":"4ba5109d471a634f9c96638fe5611047","url":"posttest.json"},{"revision":"5bc0c56940b3f3e82a5ca3c87ca4faa9","url":"pretest.html"},{"revision":"4f7af8433132055ae5b527d4df46cbb2","url":"pretest.json"},{"revision":"7fdf3c74a1bd52a7e5a28236ee4f7986","url":"procedure.html"},{"revision":"aca85e4edc46dc57ea3b895dc9183b31","url":"references.html"},{"revision":"1840bac9ce3f426bff3230a0e7a6276c","url":"simulation.html"},{"revision":"1b27535943d6e0f82935c1a5b7361885","url":"simulation/css/general.css"},{"revision":"3e795b8e5867cd06a70b638f3d58d4fa","url":"simulation/css/jquery-ui.css"},{"revision":"9aaec540ef195d9a23a76924edf55c75","url":"simulation/css/query.css"},{"revision":"a8edd593b496931e4bfe17446f9540c7","url":"simulation/css/style.css"},{"revision":"e6157ec9c2cbea499fe4e223a5fc0fe6","url":"simulation/images/apparatus.png"},{"revision":"fc7f0fca4d5575af86375ad5a9704d1d","url":"simulation/images/arrow_15.png"},{"revision":"299b7b5420ff78ea1ac43a758a1a241c","url":"simulation/images/arrow_18.png"},{"revision":"65f0aaefc92f58c3968d04d3eb9515e6","url":"simulation/images/arrow_20.png"},{"revision":"26970cd3176b752cd0e550749a477c6f","url":"simulation/images/arrow.png"},{"revision":"778aca21b7c1e00c12322bba6ad4093f","url":"simulation/images/bistable_multivibrator_withouttriger.png"},{"revision":"dc7192e04257db6a6fd890985b51976f","url":"simulation/images/bistable_multivibrator.png"},{"revision":"107f983cdcc7097b10e7fc6214ce21c6","url":"simulation/images/bluecwdull.svg"},{"revision":"caa2c9607b55ea3cb98c2db89796744b","url":"simulation/images/breadboard copy.png"},{"revision":"caa2c9607b55ea3cb98c2db89796744b","url":"simulation/images/breadboard.png"},{"revision":"6eccc02d102147b04188e990a0cd0935","url":"simulation/images/capacitor.png"},{"revision":"710f76692071b24261da67ca41c87bdf","url":"simulation/images/controls-wt.png"},{"revision":"44da5491e76fd4d0e65629f45f241e1e","url":"simulation/images/controls.png"},{"revision":"8ba8c2b3493aba99147cbf344b78639b","url":"simulation/images/diode.png"},{"revision":"076e992ad34f581e89ab184d4fc5587a","url":"simulation/images/help.svg"},{"revision":"4cecbeb42d61e6d973413b81475285b3","url":"simulation/images/help1.png"},{"revision":"8fd3022865145500c341e469948a3244","url":"simulation/images/logo_nitk.png"},{"revision":"cd4aff629a745b90ada5937909a59164","url":"simulation/images/monostable_multivibrator.png"},{"revision":"719659e9ff159902edfde5d377f042a3","url":"simulation/images/monostable_multivibratorwithtrigger.png"},{"revision":"7e742eb10d63b8c002715dd897ac3628","url":"simulation/images/objective.png"},{"revision":"cb6004321b642c8e312f40637a049bf1","url":"simulation/images/opamp.png"},{"revision":"1980db6d8eb2d4b41534a0ad3708051d","url":"simulation/images/oscilloscope.png"},{"revision":"939ecea00fbddca264eeda21f6da257a","url":"simulation/images/resistor.png"},{"revision":"c8670bae2abfa80c48ba35a0a71be8e3","url":"simulation/images/result-wt.png"},{"revision":"b83ae2b606853d44fed7887c7da21eb3","url":"simulation/images/results.png"},{"revision":"6d9627893394a46e7aaabb052bda8f2d","url":"simulation/images/slider_handles.png"},{"revision":"aaa2a64b825fe3988aef7cba4001f63c","url":"simulation/images/solution.png"},{"revision":"1392fd17c7e2cf938566d0876f3691ce","url":"simulation/index.html"},{"revision":"84ca747eb5f076445ff836de49608628","url":"simulation/js/jquery-3.6.0.js"},{"revision":"5da2fa2a91f7059b60e7fd508be63d02","url":"simulation/js/jquery-ui.js"},{"revision":"08a481084856867d371586cbf8e835ef","url":"simulation/js/jquery.ui.touch-punch.js"},{"revision":"9b9e5df5ef16f8fdd3e65c14e2149f1f","url":"simulation/js/jquery.ui.touch-punch.min.js"},{"revision":"4fc78613fd002d13c2f052be12c9a5e1","url":"simulation/js/script.js"},{"revision":"3ec1c5fb70b6d389ed4760d41963b7a1","url":"theory.html"},{"revision":"dc57ed7408ce4306d52aa426dec493d0","url":"validator-report.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );