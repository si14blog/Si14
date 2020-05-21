
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/si14/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/si14/ACApply",
    "title": "Artist/Company Apply",
    "body": "Loading…"
    }, {
    "id": 2,
    "url": "http://localhost:4000/si14/Contactus",
    "title": "Contact Us",
    "body": "E-mail : Si14blogz@gmail. comOr Use Form Below :Loading…"
    }, {
    "id": 3,
    "url": "http://localhost:4000/si14/about",
    "title": "About Us",
    "body": "Si14 blog is all about Music &amp; Electronic. We are trying to bring you latest News about, Audio Technology &amp; Music Tech. Also Our Author Engeeniers share their Audio Engeeniering Secrets &amp; Diy Electronic Projects with you Guys. We got Producers Releasing Fire Tracks Too  #### SO STAY TUNEDMain Author : Ashkan Shj"
    }, {
    "id": 4,
    "url": "http://localhost:4000/si14/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 5,
    "url": "http://localhost:4000/si14/",
    "title": "Home",
    "body": "      Featured:                                                                                                                                                                                                           Si14 Kick Extractor Ableton Rack.                               :               Extract any kick you want from your favorite track using this ableton rack:                                                                       21 May 2020                &lt;/span&gt;                                                                                                                                                                                                                                                                                                  s(M)exoscope AN OSCILLOSCOPE VST PLUGIN.                               :               Features: Available as a Standard insert effect or as a special Modular version optimized especially for modular VST hosts like Plogue Bidule or AudioMulch. Display. . . :                                                                       26 Apr 2020                &lt;/span&gt;                                                                                                                                                                                                                                                                                                  TAL-FILTER-2 IS A FREE HOST SYNCED FILTER MODULE WITH DIFFERENT FILTER TYPES, PANORAMA AND VOLUME MODULATION POSSIBILITIES.                               :               The device includes all 4x oversampled TAL-NoiseMaker filters: LP 24 dB, LP 18dB, LP 12dB, LP 6dB, HP 12 dB, BP 12dB, N 12 dB. . . . :                                                                       26 Apr 2020                &lt;/span&gt;                                                                                                                                                                                                                                                                                                  SONIMUS SONEQ FREE 3 BAND VINTAGE STYLE EQUALIZER PLUGIN.                               :               SonEQ is free equalizer plugin that takes parts from some vintage gear and combine them in one. SonEQ has 3 bands, bass, middle and treble. . . . :                                                                       26 Apr 2020                &lt;/span&gt;                                                                                                                                                                                                                                                                                                              USE ABLETON LIVE 10 SUITE FREE For 90 DAYS                              :               Ableton LETS YOU USE Live 10 Suite FOR 90 DAYS Completely FreeGet all the features of Live 10 Suite free for 90 days:                                                                       30 Mar 2020                &lt;/span&gt;                                                                                                                                                                                                                                                                                                  APPLE LETS YOU USE LOGIC PRO X FREE FOR 90 DAYS                              :                The popular music making software is now free on the App Store for 90 Days. :                                                                       29 Mar 2020                &lt;/span&gt;                                                                                                                                                                                                                                                                                                  AUDIOMODERN RELEASED A FREE MODERN MOTION FILTER PLUGIN THAT PROVIDES A GREAT DEAL OF POTENTIAL FOR ALL KINDS OF THE INTRICATE RHYTHMIC MOVEMENT CALLED FILTERSTEP                              :               Despite the coronavirus outbreak troubles, Audiomodern are continuing to create useful audio plugins for musicians and producers. :                                                                       29 Mar 2020                &lt;/span&gt;                                                                                                                                                                                                                                                                                                  NATIVE INSTRUMENTS GIVES AWAY ANALOGE DREAMS SOFT SYNTH FOR FREE (until March 31st)                               :               Native Instruments has announced that it is offering the Analog Dreams, for free until March 31st. :                                                                       25 Mar 2020                &lt;/span&gt;                                                                                                                                                                                                                                                                                                  LA_BASED PRODUCER SHARED 1GB OF FREE ANALOGUE SYNTH AND DRUM MACHINE SAMPLES                              :               LA-based producer Sharooz Raoofi shared multi-samples from his vintage synth playground in the heart of Los Angeles:                                                                       25 Mar 2020                &lt;/span&gt;                                                                                                      All Stories:                                                                                                     Si14 Kick Extractor Ableton Rack.       :       Extract any kick you want from your favorite track using this ableton rack:                               21 May 2020        &lt;/span&gt;                                                                                                                             s(M)exoscope AN OSCILLOSCOPE VST PLUGIN.       :       Features: Available as a Standard insert effect or as a special Modular version optimized especially for modular VST hosts like Plogue Bidule or AudioMulch. Display controls - Time (number of. . . :                               26 Apr 2020        &lt;/span&gt;                                                                                                                             TAL-FILTER-2 IS A FREE HOST SYNCED FILTER MODULE WITH DIFFERENT FILTER TYPES, PANORAMA AND VOLUME MODULATION POSSIBILITIES.       :       The device includes all 4x oversampled TAL-NoiseMaker filters: LP 24 dB, LP 18dB, LP 12dB, LP 6dB, HP 12 dB, BP 12dB, N 12 dB. Its possible to saturate /. . . :                               26 Apr 2020        &lt;/span&gt;                                                                                                                             SONIMUS SONEQ FREE 3 BAND VINTAGE STYLE EQUALIZER PLUGIN.       :       SonEQ is free equalizer plugin that takes parts from some vintage gear and combine them in one. SonEQ has 3 bands, bass, middle and treble. Also, SonEQ has a pre-amp. . . :                               26 Apr 2020        &lt;/span&gt;                                                                                                                             ML SOUND LAB RELEASED A FREE AMP SIM CALLED AMPED ROOTS       :       Amped Roots Free is our first amp sim release and it comes with a free amp. We want everyone to experience our amp modeling quality and plug’n’play design. Just like. . . :                               03 Apr 2020        &lt;/span&gt;                                                                                                                             TRACKTION CORPORATION HAS RELEASED WAVEFORM FREE       :       Waveform Free is a Professional Digital Audio Workstation with Linux Support:                               01 Apr 2020        &lt;/span&gt;                                       &laquo; Prev       1        2      Next &raquo; "
    }, {
    "id": 6,
    "url": "http://localhost:4000/si14/page2/",
    "title": "Home",
    "body": "{% if page. url == “/” %}       Featured:       {% for post in site. posts %}    {% if post. featured == true %}      {% include featuredbox. html %}    {% endif %}  {% endfor %}  {% endif %}       All Stories:         {% for post in paginator. posts %}    {% include postbox. html %}    {% endfor %}    {% include pagination. html %}"
    }, {
    "id": 7,
    "url": "http://localhost:4000/si14/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ &#8220;sitemap. xml&#8221;   absolute_url }}   "
    }, {
    "id": 8,
    "url": "http://localhost:4000/si14/Si14-Kick-Extractor-Ableton-Rack/",
    "title": "Si14 Kick Extractor Ableton Rack.",
    "body": "2020/05/21 - Extract any kick you want from your favorite track using this ableton rack: Download "
    }, {
    "id": 9,
    "url": "http://localhost:4000/si14/s(M)exoscope-an-oscilloscope-VST-plugin/",
    "title": "s(M)exoscope AN OSCILLOSCOPE VST PLUGIN.",
    "body": "2020/04/26 - Features::  Available as a Standard insert effect or as a special Modular version optimized especially for modular VST hosts like Plogue Bidule or AudioMulch.  Display controls - Time (number of pixels per sample) &amp; Amp (amplitude of the waveform in the display).  Retrigger modes - Free, Internal, Rising &amp; Falling - with Retrigger Threshold. External mode also available in the modular version.  Options - Sync Redraw, Freeze, DC-Kill &amp; Channel. The s(M)exoscope also contains a tool that can be used to analyze the waveform currently in the display. Based on where you place a marker, the tool analyzes the x and y dimensions of the waveform to calculate the following:  Selection amplitude (linear).  Selection amplitude (decibels).  Selection length (in samples).  Selection length (in seconds).  Selection length (in milliseconds).  Selection frequency (assuming that the selection is one cycle in length). More Info : Main WebsiteDownloads: Windows: Mac OSX: Mac OSX Audio Unit Version: "
    }, {
    "id": 10,
    "url": "http://localhost:4000/si14/TAL-Filter-2-Host-Synced-Filter-Module/",
    "title": "TAL-FILTER-2 IS A FREE HOST SYNCED FILTER MODULE WITH DIFFERENT FILTER TYPES, PANORAMA AND VOLUME MODULATION POSSIBILITIES.",
    "body": "2020/04/26 -  The device includes all 4x oversampled TAL-NoiseMaker filters: LP 24 dB, LP 18dB, LP 12dB, LP 6dB, HP 12 dB, BP 12dB, N 12 dB. Its possible to saturate / distort the input signal by raising the input volume with the input control (only if you use a filter as modulation type). Its also possible to modulate the panorama or volume of an incoming signal. This can be used for tremolo or trance gate effects. Panorama modulation maybe is useful to pan your percussion, hats or sound effects in the stereo room for more interesting rythms and sounds. More Info : Main WebsiteDownloads v 2. 5. 0:    Windows:     OSX:     VST3 Presets:  "
    }, {
    "id": 11,
    "url": "http://localhost:4000/si14/SONEQ-free-3-band-vintage-equalizer-plugin/",
    "title": "SONIMUS SONEQ FREE 3 BAND VINTAGE STYLE EQUALIZER PLUGIN.",
    "body": "2020/04/26 -  SonEQ is free equalizer plugin that takes parts from some vintage gear and combine them in one. SonEQ has 3 bands, bass, middle and treble. Also, SonEQ has a pre-amp section. SonEQ is a free VST/AU/AAX plugin for Mac and Windows.  3 band Equalizer, Low, Mid, High.  2 Musical Filters, High-Pass Low-Pass.  Preamp stage with bass booster.  64-bit floating point precision.  Up to 192kHz sample rates supportedSUPPORTED PLATFORMS: Audio Unit, VST 2. 4, VST 3, AAX, RTAS. All platforms support both 32 and 64 bit operation. SUPPORTED OPERATING SYSTEMS:  Mac OSX 10. 6 or newer Windows XP or newerTECHNICAL SPECIFICATIONS:  Sample Rate Support: up to 192 khz.  Bit Depth: 64 bits (floating point).  Channels: Mono and Stereo.  Latency: Zero. For More Info &amp; Free Download : Main Website"
    }, {
    "id": 12,
    "url": "http://localhost:4000/si14/AmpedRootsFree/",
    "title": "ML SOUND LAB RELEASED A FREE AMP SIM CALLED AMPED ROOTS",
    "body": "2020/04/03 -  Amped Roots Free is our first amp sim release and it comes with a free amp. We want everyone to experience our amp modeling quality and plug’n’play design. Just like with real amps you will not spend a lot of time tweaking. FOR FREE DOWNLOAD CLICK HERE: Compatible with:  Windows Mac Standalone VST3 Plugin AU PluginMORE AMPS IMMEDIATELY: Amped Roots Free comes with one amp: “5034 Fluff” however to get three more amps: “5151 Fluff”, “Freeman Fluff” and “Mega Fluff” you need to purchase Amped Roots Full License. Amp descriptions by Fluff:                5034 Fluff (Free)     Modern metal chugs. No overdrive needed.                          5151 Fluff     The 1992 legend. You know the sound.                          Freeman Fluff     Tune low, chug slow. Whats that smell?                         Mega Fluff     The early 90’s monster that birthed Nu Metal.            No goatee required. FOR MORE INFO ABOUT ::  FLUFF’S PERSONAL CAB PEDALBOARD IR LOADER SOUND SAMPLESAND FREE DOWNLOAD CLICK HERE: "
    }, {
    "id": 13,
    "url": "http://localhost:4000/si14/Waveform-Free/",
    "title": "TRACKTION CORPORATION HAS RELEASED WAVEFORM FREE",
    "body": "2020/04/01 - Waveform Free is a Professional Digital Audio Workstation with Linux Support: If you’re a Raspberry Pi Guy like us and you’ve always been looking For a Good Looking and professional Digital Audio Workstation for your Single Board Or Linux Computer then you’ve no doubt heard about Tracktion T7 which is considered one of the best free digital audio workstations (DAWs) around. But that’s changing. A new, free replacement for the Traction T7 DAW has been announced, and it looks mighty impressive! TAKE YOUR IDEAS TO THE PROFESSIONAL LEVEL:  Waveform Free is unlike any other so called Free DAW – we fully acknowledge it has more capabilities than most enthusiast producers will ever need. There are no restrictions whatsoever – unlimited track count, add popular plugins and enjoy the deeply capable feature set. Once addicted we have a perfect selection of deep dive tools available in Waveform Pro to take you to the next level. FOR FREE DOWNLOAD AND GETTING STARTED CLICK HERE: Tracktion’s Waveform Free is perfect for making and sharing music for anyone stuck at home, self-isolating. The new DAW is suitable for all three major desktop operation systems; Windows, OSX and Linux as well as the revolutionary Raspberry Pi. It is fully compatible with the new generation of expressive instruments and also supports MPE. Waveform Free includes many of Tracktion’s recent popular innovations including; the MIDI Pattern Generator to create synchronized melodies, chord progressions, bass lines and more, the powerful 40SC Virtual Synthesizer and Micro Drum Sampler.  Most importantly, the app can load third-party VST plugins, meaning that you’ll have access to an almost unlimited amount of virtual instruments and effects. Also, the DAW comes with its own set of native effects and a couple of virtual instruments. 4OSC:  4OSC is a powerful yet simple to navigate subtractive synthesiser. It’s clean UI and small CPU footprint make it a great alternative to Subtractive for less complex sound design tasks. As the name suggests 4OSC offers 4 oscillators, flexible modulation, MPE compatibility and a range of onboard filters and FX. MICRO DRUM SAMPLER:  Waveform’s new drum sampler is a fast and easy way to quickly create your own drum kits and start programming. Utilizing simple drag and drop for audio files, MIDI learn for rapid assignment to external controllers, and a ton of great editing features commonly used for drum production, the Drum Sampler is you new powerhouse for create beats. Intelligent integration with our popular MIDI Step Clips allow you to seamlessly move into arrangements. It’s as easy as sample, play, create. PLUGIN SANDBOXING:  3rd party plugins are the weak link for any digital audio workstation. Waveform Free addresses this by implementing plugin sandboxing. Once activated your work environment is protected by keeping plugin crashes contained. Instead of the host closing, the plugin is simply deactivated. For Tutorial Videos Click Here: FOR FREE DOWNLOAD AND GETTING STARTED CLICK HERE: "
    }, {
    "id": 14,
    "url": "http://localhost:4000/si14/Ableton-Live-Free-90-Days/",
    "title": "USE ABLETON LIVE 10 SUITE FREE For 90 DAYS",
    "body": "2020/03/30 - Ableton LETS YOU USE Live 10 Suite FOR 90 DAYS Completely FreeGet all the features of Live 10 Suite free for 90 daysGET STARTED &amp; DOWNLOAD FOR FREE HEREWhat is Ableton Live?:  Ableton Live lets you easily create, produce and perform music within one intuitive interface. Live keeps everything in sync and works in real-time, so you can play and modify your musical ideas without interrupting the creative flow. Live comes with a versatile collection of instruments, sounds, kits and loops for creating any kind of music and provides a full complement of effects to tweak and process your sound. The free trial period typically runs 30 days, but with the current coronavirus (COVID-19) quarantine there’s no better time to social distance yourself with your DAW (digital audio workstation).  Ableton Live 10 Suite includes::  Ableton Live 13 Instruments to try (including Wavetable, Operator, Sampler, Analog and more) 56 Effects for processing audio and MIDI (including Echo, Pedal, Beat Repeat, Amp, Vocoder, Glue and lots more) Instant mappings so you can use Live with your keyboards or controller.  Max for Live so you have access to a range of instruments, effects and customizations created by the Live community. If you’re currently working in Live 9, you can still sign up for the 90 day trial and your library will not be overwritten or altered. GET STARTED &amp; DOWNLOAD FOR FREE HERE: "
    }, {
    "id": 15,
    "url": "http://localhost:4000/si14/Logic-Pro-X-Free-90-Days/",
    "title": "APPLE LETS YOU USE LOGIC PRO X FREE FOR 90 DAYS",
    "body": "2020/03/29 -  The popular music making software is now free on the App Store for 90 Days. Click Here To Download Logic Pro X For Free:  Logic Pro is a digital audio workstation and MIDI sequencer software application for the macOS platform. It was originally created in the early 1990s as Notator Logic, or Logic, by German software developer C-Lab which later went by Emagic. Apple has confirmed that, in light of current events, it’s offering free 90-day access to its Logic Pro X Daw and Final Cut Pro X video editing application so that everyone can make music and edit videos for Free. This is the first time a free trial of Logic Pro X has been available, though Apple say once the 90 days are up, there’ll be an ongoing 30-day free trial thereafter. Click Here To Download Logic Pro X For Free: "
    }, {
    "id": 16,
    "url": "http://localhost:4000/si14/AudioModern-Free-Motion-Filter-Filterstep/",
    "title": "AUDIOMODERN RELEASED A FREE MODERN MOTION FILTER PLUGIN THAT PROVIDES A GREAT DEAL OF POTENTIAL FOR ALL KINDS OF THE INTRICATE RHYTHMIC MOVEMENT CALLED FILTERSTEP",
    "body": "2020/03/29 - Despite the coronavirus outbreak troubles, Audiomodern are continuing to create useful audio plugins for musicians and producers. Recently They’ve Released a Motion Free Plugin Called Filterstep.  It can give you incredibly complex and nuanced results based on various filter effect settings, and almost infinite possibilities for sonic exploration and movement randomization. Click Here For Free Download: It’s available as VST/AU &amp; iOS App: Features VST/VST3/AU/AAX/iOS &amp; Standalone Generate Filter Grooves in real-time Syncs to Host tempo Wet/Dry mix control MIDI Controllable Infinity Mode   Quick Load presets   x64 &amp; x32 bit Compatible Instant/Tap Bypass for live performance Quantization settings Motion selector Customizable Sequence Range Assign Presets to Quick-Load Section No Two Patterns will Ever be the SameCheck out their Official Video about this Free ProductRequirements Mac OS X 10. 12 or higher Windows 7 or higher At least 50 MB of free drive space Reliable internet connection for download delivery and product activationClick Here For Free Download"
    }, {
    "id": 17,
    "url": "http://localhost:4000/si14/Free-NI-ANALOG-DREAMS-SOFT-SYNTH/",
    "title": "NATIVE INSTRUMENTS GIVES AWAY ANALOGE DREAMS SOFT SYNTH FOR FREE (until March 31st) ",
    "body": "2020/03/25 - Native Instruments has announced that it is offering the Analog Dreams, for free until March 31st. :  Today, measures to control the COVID-19 pandemic are forcing much of the world into an unprecedented period of restriction, isolation, and uncertainty – with the music community hit particularly hard. Native Instruments wants to support the community through this time, and help people at home to be creative.  Analog sounds from vintage synths of the ’70s, ’80s, and beyond Blended samples creatively processed to generate unique results Ready-to-go presets in a streamlined interface Part of the Play Series: Great-sounding presets and real-time control in an intuitive interfacethis comes with more than 100 tweakable presets ranging from thick basses to dreamy pads, and usually retails for $49. It’s free until 31 March. DOWNLOAD IT HERE: In a statement, NI executives Daniel Haver and Mate Galic said::  “These are challenging times for the global music community. “Cancellations, closures, and city lockdowns have hit artists and DJs particularly hard, with many people facing long periods of isolation. We are looking at ways we can support, and we encourage you to make the most of this time to connect with each other, learn new skills, and explore new sounds. “That’s why we’re making Analog Dreams free until the end of March: A small gift to keep you inspired during all the extra home studio time. “Stay safe, look out for each other, and keep on creating. ” "
    }, {
    "id": 18,
    "url": "http://localhost:4000/si14/Free-Analogue-Synth-Drum-Machine-Sample/",
    "title": "LA_BASED PRODUCER SHARED 1GB OF FREE ANALOGUE SYNTH AND DRUM MACHINE SAMPLES",
    "body": "2020/03/25 - LA-based producer Sharooz Raoofi shared multi-samples from his vintage synth playground in the heart of Los Angeles Download over 1GB of free analogue synth and drum machine samples here. The collection includes presets from the likes of the Jupiter-8, Juno-60, ARP Odyssey, Roland D-50, Korg MS20, Oberheim OB-8, Sequential Circuits ProOne, Roland TB-303, TR-808, TR-909 and Yamaha DX7. Each preset is multi-sampled so you can load them into your sampler of choice and get creating. Download the ZIP file here. Links Are On WeTransfer (so the links will likely expire soon). "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});