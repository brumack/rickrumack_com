/* global $ */

$(document).ready(function(){
    
/* ------------------------------------------------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------- Buying Page ------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------------------------------------------- */


$('#type').tooltip({delay: 50, html:true, position:'top', tooltip:'<p class="tip">There are several forms of home ownership:<hr>' +
                                                                    '<ul class="left-align tip">' +
                                                                    '<li><span>Single-family homes:</span> One home per lot.</li>' +
                                                                    '<li><span>Multiple-family homes:</span> Some buyers, particularly first-timers,' +
                                                                    'start with multiple-family dwellings, so they\'ll have rental income to help with their' +
                                                                    'costs. Many mortgage plans, including VA and FHA loans, can be used for buildings with up to' +
                                                                    'four units, if the buyer intends to occupy one of them.</li>' +
                                                                    '<li><span>Condominiums:</span> With a condo, you own "from the plaster in."' +
                                                                    'You also own a certain percentage of the "common elements" - staircases, sidewalks,' +
                                                                    'roofs, etc. Monthly charges pay your share of taxes and insurance on those elements,' +
                                                                    'as well as repairs and maintenance. A homeowner’s association administers the development.</li>' +
                                                                    '<li><span>Co-ops:</span> In some cities, cooperative apartments are common. With co-ops,' +
                                                                    'you purchase shares in a corporation that owns the whole building, and you receive a lease to' +
                                                                    'your own unit. A board of directors, comprised of owners and elected by owners, supervises the' +
                                                                    'building management. Monthly charges include your share of an overall mortgage on the building.</li>' +
                                                                    '</ul><p>'});

$('#age').tooltip({delay: 50, html:true, position:'top', tooltip:'<p class="left-align tip">Weigh your needs, budget and personal tastes in deciding whether you want' +
                                                                    'to buy a newly constructed home, an older home or a "fixer-upper" that requires some work.'});

$('#resale').tooltip({delay: 50, html:true, position:'top', tooltip:'<p class="tip">As you look at homes, you may want to keep in mind these resale considerations.<hr style="margin:0 20px">' +
                                                                        '<ul class="left-align tip">' +
                                                                        '<li><i class="material-icons">check_box</i>One-bedroom condos are more difficult to resell than two-bedroom condos.</li>' +
                                                                        '<li><i class="material-icons">check_box</i>Two-bedroom/one-bath single houses generally have less appeal than houses with' +
                                                                        'three or more bedrooms, and therefore have less appreciation potential.</li>' +
                                                                        '<li><i class="material-icons">check_box</i>Homes with "curb appeal," i.e., well-maintained, attractive and with a charming' +
                                                                        'appearance from the street, are the easiest to resell.</li>' +
                                                                        '<li><i class="material-icons">check_box</i>The most expensive houses on the street, or ones with anything unusual or unique' +
                                                                        'are not suited for resale. The best investment potential is traditionally found in a less expensive, more moderately sized home.</li>' +
                                                                        '</ul>' });


$('#features').tooltip({delay: 50, html:true, position:'top', tooltip:'<p class="left-align tip">Make a features wish list to clarify which features are most and least important to you when looking for a home.' +
                                                                      ' Using this features wish list will keep your house hunt focused and effective.</p>'});

$('#comparison').tooltip({delay: 50, html:true, position:'top', tooltip:'<p class="left-align tip">While house hunting, it\'s a good idea to make notes about what you see because viewing several houses at a time' +
                                                                        'can be confusing. Use a home comparison chart to help you keep track of your search, organize your thoughts and record your impressions.</p>' });

$('#act').tooltip({delay: 50, html:true, position:'top', tooltip:'<p class="left-align tip">Before you begin the home buying process, resolve to act promptly when you do find the right house. Every REALTOR® has' +
                                                                'stories to tell about a couple who looked far and wide for their dream home, finally found it, and then said, "We always promised my Dad' +
                                                                'we\'d sleep on it, so we\'ll make an offer tomorrow." Many times the story had a sad ending - someone else came in that evening with an offer' +
                                                                'that was accepted.</p>' +
                                                                '<p class="left-align tip">Resolve that you will act decisively when you find the house that’s clearly right for you. This is particularly' +
                                                                'important after a long search or if the house is newly listed and/or underpriced.</p>'});
                                                                

$('#inspection').tooltip({delay: 50, html:true, position:'top', tooltip:'<p class="left-align tip">A good home inspection is an objective, top-to-bottom examination of a home and everything that comes with it.' +
                                                                    'The standard inspection report includes a review of the home\'s heating and air-conditioning systems, plumbing and wiring, roof, attic,' +
                                                                    'walls, ceilings, floors, windows, doors, foundation and basement.</p>' +
                                                                    '<p class="left-align tip">Getting a professional inspection is crucial for older homes because age often takes its toll on the roof and other' +
                                                                    'hard-to-reach areas. Problems can also be the result of neglect or hazardous repair work, such as a past owner\'s failed attempt to install lights' +
                                                                    'and an outlet in a linen closet.</p>' +
                                                                    '<p class="left-align tip">A home inspection is also a wise investment when buying a new home. In fact, new homes frequently have defects, whether' +
                                                                    'caused by an oversight during construction or simply human error.</p>'});



$('#educate').tooltip({delay: 50, html:true, position:'top', tooltip:'<p class="left-align tip">Education is another good reason for getting an inspection. Most buyers want to learn as much as they can about' +
                                                                    'their purchase so they can protect their investment. An examination by an impartial home inspector helps in this learning process.</p>' +
                                                                    '<p class="left-align tip">Ask if you can follow the home inspector on his or her rounds. Most inspectors are glad to share their knowledge,' +
                                                                    'and you\'ll be able to ask plenty of questions.</p>'});


$('#expect').tooltip({delay: 50, html:true, position:'top', tooltip:'<p class="left-align tip">Homebuyers usually arrange for an inspection after signing a contract or purchase agreement with the seller. The results' +
                                                                    'may be available immediately or within a few days. The home inspector will review his or her findings with you and alert you to any costly or' +
                                                                    'potentially hazardous conditions. In some cases, you may be advised not to buy the home unless such problems are remedied.</p>' +
                                                                    '<p class="left-align tip">You could include a clause in your purchase agreement that makes your purchase contingent upon satisfactory' +
                                                                    'inspection results. If major problems are found, you can back out of the deal. If costly repairs are warranted, the seller may be willing' +
                                                                    'to adjust the home\'s price or the contract\'s terms. But when only minor repairs are needed, the buyer and seller can usually work out an' +
                                                                    'agreement that won\'t affect the sale price.</p>'});






    

/* ------------------------------------------------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------- Selling Page ------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------------------------------------------- */



/* -----------------------------------------------Setting a Listing Price for Your Home-------------------------------------------------- */


$('#pricing').tooltip({delay: 50, html:true, position:'top', tooltip:'<p class="left-align tip">When setting a list price for your home, you should be aware ' +
                            'of a buyer’s frame of mind. Consider the following pricing factors: ' + 
                            'If you set the price too high, your house won’t be picked for viewing, even ' +
                            'though it may be much nicer than other homes on the street. You may have ' +
                            'told your REALTOR® to \'Bring me any offer. Frankly, I’d take less.\' But ' + 
                            'compared to other houses for sale, your home simply looks too expensive ' +
                            'to be considered. If you price too low, you\'ll short-change yourself. Your ' +
                            'house will sell promptly, yes, but you may make less on the sale than if you ' +
                            'had set a higher price and waited for a buyer who was willing to pay it.<br><br> ' +
                            'TIP: Never say \'asking\' price, which implies you don\'t expect to get it.</p>'});
                            
$('#comparable').tooltip({delay: 50, html:true, position:'top', tooltip:'<p class="left-align tip">No matter how attractive and polished your house, buyers will be' +
                                                                        'comparing its price with everything else on the market. <strong>Your best guide' +
                                                                        'is a record of what the buying public has been willing to pay in the past few' +
                                                                        'months for property in your neighborhood.</strong> Your REALTOR® can furnish' +
                                                                        'data on sales figures for those comparable sales and analyze them to help you'+
                                                                        'come up with a suggested listing price. The decision about how much to ask,' +
                                                                        'though, is always yours.'});
                                                            
$('#conditions').tooltip({delay: 50, html:true, position:'top', tooltip:'<p class="left-align tip">A CMA often includes a Days on the Market (DOM) value for each comparable house sold. When real' +
                                                                        'estate is booming and prices are rising, houses may sell in a few days. Conversely, when the market' +
                                                                        'slows down, average DOM can run into many months. Your REALTOR® can tell you whether your area is' +
                                                                        'currently in a buyer\'s market or a seller\'s market. In a seller\'s market, you can price a bit beyond' +
                                                                        'what you really expect, just to see what the reaction will be. In a buyer\'s market, if you really need' +
                                                                        'to sell promptly, offer an attractive bargain price.'});

$('#schedule').tooltip({delay: 50, html:true, position:'top', tooltip:'<p class="left-align tip">Some sellers list at the rock-bottom price they\'d really take, because they hate bargaining. ' +
                                                                        'Others add on thousands to the estimated market value "just to see what happens." If you want to ' + 
                                                                        'try that, and if you have the luxury of enough time to feel out the market, sit down with your REALTOR® ' +
                                                                        'and work out an advance schedule for lowering the price if need be.<br><br>' +
                                                                        'If there haven\'t been many prospects viewing your home after three weeks, you may need to lower your ' +
                                                                        'list price. If that doesn\'t bring any prospective buyers, you may need to lower your list price again. ' +
                                                                        'Plan on doing that regularly until you find a level that attracts buyers. Make a written schedule in advance, ' +
                                                                        'before emotion takes over and you\'re tempted to dig your heels in.'});

$('#incentives').tooltip({delay: 50, html:true, position:'top', tooltip:'<p class="left-align tip">Sometimes cash incentives are as effective as lowering the price, especially in the lower price range where' +
                                                                        'buyers may be "cash poor." You may offer to pay some or all of a buyer\'s closing costs and discount points' +
                                                                        'required by the buyer\'s lending institution.<br><br>' +
                                                                        'If you haven\'t had much traffic through your house and you’re in a hurry to sell, you may want to add the offer' +
                                                                        'of a bonus to the selling broker, in addition to their commission. An example of the wording for such an offer may' +
                                                                        'be "to the broker who brings a successful offer before Christmas."'});

$('#estimating').tooltip({delay: 50, html:true, position:'top', tooltip:'<p class="left-align tip">Once you’ve been given an estimate of market value by your REALTOR®, you can get a rough idea of how much' +
                                                                        'cash you might walk away with when the sale is completed. This can be particularly useful when you start' +
                                                                        'looking for another home to buy.<br><br>' +
                                                                        'To estimate your net proceeds, from the estimated sales amount, subtract the applicable costs in the three' +
                                                                        'sections outlined below: seller’s costs, buyer’s/seller’s costs and closing costs.</p>'});



/* -------------------------------------------------------Marketing Your Home------------------------------------------------------------ */

$('#advertising').tooltip({delay: 50, html:true, position:'top', tooltip:'<p class="left-align tip">Properties are commonly advertised through real estate agent Web sites, Internet ' +
                                                                        'home search/listing services, classified advertising and real estate guides. Promotion ' +
                                                                        'efforts through office and MLS tours are a good way of getting other buyer agents to view ' +
                                                                        'your home and to promote it to the buyers they are working with.<br><br>' +
                                                                        'Even with all these advertising avenues, " For Sale" signs on front lawns are still remarkably ' +
                                                                        'effective. Many REALTORS® promote their Web sites on the sign and use brochure boxes with the ' +
                                                                        'signs to market the property. When appropriate, and with your permission, your REALTOR® may send ' +
                                                                        'a mailing about your property to neighbors. Sometimes one of them has a friend or relative who ' +
                                                                        'always wanted to live near them. You never know how far reaching the benefits of word-of-mouth ' +
                                                                        'advertising by friends, relatives and neighbors can be.</p>'});



$('#showings').tooltip({delay: 50, html:true, position:'top', tooltip:'<p class="left-align tip">To prepare your home for viewing, make it as bright, clean, cheerful and serene as possible. ' +
                                                                        'Always look at your home from the buyer\'s point of view. Your REALTOR® will probably find ' +
                                                                        'a tactful way to suggest that you be absent while the house is being shown to prospective buyers, ' +
                                                                        'because your presence will inhibit their actions and conversations. They won’t feel free to open ' +
                                                                        'closets and cabinets, test out the plumbing and discuss their observations objectively as they walk ' +
                                                                        'through the house. It goes without saying that your children and pets should not be on the premises either.<br><br>' +
                                                                        'If your REALTOR® has scheduled an open house, you may want to notify the neighbors, and assure them ' +
                                                                        'that they\'ll be welcome. They\'ll jump at the chance to poke around in your house, and sometimes they ' +
                                                                        'can turn up a buyer among their friends.</p>'});
                                                                        
$('#long').tooltip({delay: 50, html:true, position:'top', tooltip:'<p class="left-align tip">Professional appraisers sum up their entire body of knowledge in three words: " Buyers make value." ' +
                                                                    'Your home is worth as much as a buyer will pay for it.<br><br>' +
                                                                    'If your home has been on the market for months, it’s a clear message that the property may not be worth ' +
                                                                    'what you\'re asking for it. This is particularly true if there haven\'t been many prospects coming to see it. ' +
                                                                    'What you do at that point depends on whether you really need to sell, and whether you\'re working with a' +
                                                                    'time limit.<br><br>' +
                                                                    'If you\'re not really motivated to move soon, you can always wait - years if necessary - and hope inflation ' +
                                                                    'will catch up with the price you want. The problem is that in that time, your home begins to feel shopworn. ' +
                                                                    'Buyers become suspicious of a house that\'s been for sale for a long time.<br><br>' +
                                                                    'If you really do need to sell, with your REALTOR® discuss a schedule for gradually dropping your price until ' +
                                                                    'you find a level that attracts buyers. There\'s no point in saying, " We simply can\'t sell our house." Anything ' +
                                                                    'will sell if the price is right.</p>'});

$('#another').tooltip({delay: 50, html:true, position:'top', tooltip:'<p class="left-align tip">You may wonder what will happen when you\'re selling one home and buying another – how will all ' +
                                                                    'the details work out? This is a common situation and REALTORS®, lawyers, and title and escrow companies ' +
                                                                    'have plenty of experience in arranging contracts and loans so that the two transactions dovetail smoothly.' +
                                                                    'Should you sell your home first then buy or buy first then sell? Ideally, it’s best to find a home you ' +
                                                                    'like and make an offer subject to selling your current home. This generally works in a normal market. ' +
                                                                    'However, in a “hot” market most sellers will not accept a “subject to sale” offer. In this case you need ' +
                                                                    'to sell your home first and then buy a new home in the interim period between selling and vacating your house.<br><br>' +
                                                                    'If you find that you need to buy the next house before you\'ve received the proceeds from the present one, ' +
                                                                    'lending institutions can sometimes make you a short-term " bridge" loan to tide you over between the two ' +
                                                                    'transactions. Make sure you fully understand the exposure and emotional investment before proceeding with ' +
                                                                    'this type of loan.</p>'});



/* -------------------------------------------------------Marketing Your Home------------------------------------------------------------ */

$('#spend').tooltip({delay: 50, html:true, position:'top', tooltip:'<p class="left-align tip">In preparing your home for the market, spend as little money as possible.<br>' +
                                                          'Buyers will be impressed by a brand new roof, but they aren\'t likely to give you enough' +
                                                          'extra money to pay for it. There is a big difference between making minor and inexpensive' +
                                                          'polishes and touch-ups to your house, such as putting new knobs on cabinets and a fresh coat' +
                                                          'of neutral paint in the living room, and doing extensive and costly renovations, like installing' +
                                                          'a new kitchen.<br>' +
                                                            'Your REALTOR® is familiar with buyers\' expectations in your neighborhood and can advise you' +
                                                            'specifically on what improvements need to be made and which improvements are most effective. Don\'t' +
                                                            'hesitate to ask for advice.</p>'});

$('#exterior').tooltip({delay: 50, html:true, position:'top', tooltip:'<p class = "left-align tip">When preparing to put your home up for sale, your first concern is the home\'s exterior.' +
                                                                    'If the outside, or "curb appeal" looks good, people will more than likely want to see what\'s' +
                                                                    'on the inside.<br>' +
                                                                    'Here are some tips to enhance your home’s exterior and curb appeal to buyers:<hr style="margin:0 20px">' +
                                                                    '<ul class="left-align tip">'+
                                                                    '<li><i class="material-icons">check_box</i>Keep the lawn edged, cut and watered. </li>' +
                                                                    '<li><i class="material-icons">check_box</i>Regularly trim hedges and weed lawns and flowerbeds.</li>' +
                                                                    '<li><i class="material-icons">check_box</i>Be sure your front door area has a "Welcome" feeling.</li>' +
                                                                    '<li><i class="material-icons">check_box</i>Paint the front door.</li>' +
                                                                    '<li><i class="material-icons">check_box</i>In spring and summer, add a couple of pots of showy annuals near your front entrance.</li>' +
                                                                    '<li><i class="material-icons">check_box</i>In snowy areas, keep walks neatly cleared of snow and ice.</li>' +
                                                                    '<li><i class="material-icons">check_box</i>Check foundation, steps, walkways, walls and patios for cracks and deterioration, and fix any problem areas.</li>' +
                                                                    '<li><i class="material-icons">check_box</i>Remove and repaint any peeling paint on doors and windows.</li>' +
                                                                    '<li><i class="material-icons">check_box</i>Clean and align gutters.</li>' +
                                                                    '<li><i class="material-icons">check_box</i>Inspect and clean the chimney.</li>' +
                                                                    '<li><i class="material-icons">check_box</i>Repair and replace loose or damaged roof shingles.</li>' +
                                                                    '<li><i class="material-icons">check_box</i>Repair and repaint loose siding and caulking.</li>' +
                                                                    '<li><i class="material-icons">check_box</i>Reseal old asphalt.</li>' +
                                                                    '<li><i class="material-icons">check_box</i>Keep the garage door closed</li>' +
                                                                    '<li><i class="material-icons">check_box</i>Store RVs and old cars elsewhere while the house is on the market.</li>' +
                                                                    '</ul></p>'});

$('#interior').tooltip({delay: 50, html:true, position:'top', tooltip:'<p class="left-align tip">You want your home to look as spacious, bright and clean as possible.' +
                                                                        'Also the home should look neutral – without a lot of your personal and sentimental' +
                                                                        'objects - so buyers can begin to imagine living there.<br>' +
                                                                        'Here are some tips to enhance your home’s interior appeal to buyers:<hr style="margin:0 20px">' +
                                                                        '<ul class="left-align tip">' +
                                                                        '<li><i class="material-icons">check_box</i>Give every room in the house a thorough cleaning and remove all clutter.</li>' +
                                                                        '<li><i class="material-icons">check_box</i>Use a professional cleaning service every few weeks while the house is on the market.</li>' +
                                                                        '<li><i class="material-icons">check_box</i>Remove the less frequently used, and even daily-used items from kitchen counters, closets, basement and attic.</li>' +
                                                                        '<li><i class="material-icons">check_box</i>Make sure that table tops, dressers and closets are free of clutter.</li>' +
                                                                        '<li><i class="material-icons">check_box</i>Pay special attention to the kitchen and bathrooms: they should look as modern, bright and fresh as possible.</li>' +
                                                                        '<li><i class="material-icons">check_box</i>Repair dripping faucets and showerheads.</li>' +
                                                                        '<li><i class="material-icons">check_box</i>Buy showy new towels for the bathroom, and put them out only for showings.</li>' +
                                                                        '<li><i class="material-icons">check_box</i>Spruce up a kitchen in need of more major remodeling. Consider fresh, neutral paint</li>' +
                                                                        '<li><i class="material-icons">check_box</i>Clean walls and doors of smudges and scuff marks.</li>' +
                                                                        '<li><i class="material-icons">check_box</i>Paint dingy, soiled or strongly-colored walls with a neutral shade.</li>' +
                                                                        '<li><i class="material-icons">check_box</i>Check for and fix cracks, leaks and signs of dampness in the attic and basement.</li>' +
                                                                        '<li><i class="material-icons">check_box</i>Check for cracks, leaks and signs of dampness in the attic and basement</li>' +
                                                                        '<li><i class="material-icons">check_box</i>Repair cracks, holes or damage to plaster, wallboard, wallpaper, paint and tiles.</li>' +
                                                                        '<li><i class="material-icons">check_box</i>Replace broken or cracked windowpanes, moldings and other woodwork.</li>' +
                                                                        '<li><i class="material-icons">check_box</i>Inspect and repair the plumbing, heating, cooling and alarm systems.</li>' +
                                                                        '</ul></p>'});
                                                                        
                                                                        
$('#mort-tip').tooltip({delay: 50, html:true, position:'top', tooltip:'<p class="left-align tip">The Housing Ratio consists of the monthly housing payment to total gross monthly ' +
                                                                    'income ratio. This ratio is used by lenders to determine the maximum monthly payment a lender is likely to allow ' +
                                                                    'you to carry based on your income alone. The first ratio is more conservative. The second ratio is more liberal.</p>'});
                                                                        
});
                                                                        
                                                                        






