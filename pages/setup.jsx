import { SetupItem } from "../components/common/SetupItem";

export default function SetupPage() {
  return (
    <main id="setup" className="setup">
      <section className="wrapper">
        <h3>Disclaimer: This page contains affiliate links.</h3>
        <h2 className="red-text">Specs</h2>
        <table>
          <tr>
            <th>MacBook Pro (16-inch, 2021)</th>
          </tr>
          <SetupItem category="CPU" item="10-Core" />
          <SetupItem category="GPU" item="32-Core" />
          <SetupItem category="Memory" item="64GB" />
          <SetupItem category="Storage" item="1TB" />
        </table>
        <h2 className="yellow-text">Peripherals</h2>
        <table>
          <tr>
            <th>Monitors</th>
          </tr>
          <SetupItem
            category="Main Monitor"
            item="LG 32&#39; UltraFine Display Ergo"
          />
          <SetupItem category="Secondary Monitor" item="LG 27&#39; UHD 4K" />
        </table>
        <table>
          <tr>
            <th>Audio</th>
          </tr>

          <SetupItem category="Microphone" item="Shure SM7B" />
          <SetupItem category="Audio Interface" item="Focusrite Scarlett 2i2" />
          <SetupItem
            category="Mic Activator"
            item="Cloud Microphones Cloudlifter CL-1"
            itemLink="https://amzn.to/3Bsiu3P"
          />
          <SetupItem
            category="Mic Stand"
            item="Rode PSA1"
            itemLink="https://amzn.to/3REhNev"
          />
          <SetupItem category="Speaker" item="Kanto YU2" />
          <SetupItem category="Headphones" item="Sennheiser HD579" />
        </table>

        <table>
          <tr>
            <th>Camera</th>
          </tr>
          <SetupItem
            category="Camera"
            item="Sony a6000"
            itemLink="https://amzn.to/3Biozjq"
          />
          <SetupItem
            category="Cam Link"
            item="Elgato Cam Link 4K"
            itemLink="https://amzn.to/3BPC4sa"
          />
          <SetupItem
            category="Lights"
            item="Elgato Key Light"
            itemLink="https://amzn.to/3SfsFj2"
          />
        </table>
        <table>
          <tr>
            <th>I/O</th>
          </tr>
          <SetupItem
            category="Docking Station"
            item="Corsair Thunderbolt TBT"
            itemLink="https://amzn.to/3QNyP9b"
          />
          <SetupItem
            category="Keyboard"
            item="Apple Magic Keyboard with Touch ID"
            itemLink="https://amzn.to/3Ud1IOO/"
          />
          <SetupItem category="Mouse" item="Apple Magic Mouse 2 - Space Grey" />
        </table>

        <h2 className="green-text">Desk/Accessories</h2>
        <table>
          <tr>
            <th>Desk</th>
          </tr>
          <SetupItem
            category="Desk"
            item="Ergonofis The Shift / Deep Black / 30&#39; X 72&#39;"
            itemLink="http://ergonofis.refr.cc/saminak"
          />
          <SetupItem
            category="Chair"
            item="Herman Miller Sayl"
            itemLink="https://www.hermanmiller.com/products/seating/office-chairs/sayl-chairs/"
          />
          <SetupItem
            category="Desk Mat"
            item="Corsair MM350 PRO Premium Gaming Mouse Pad"
            itemLink="https://amzn.to/3Sflszs"
          />
          <SetupItem
            category="Laptop Stand"
            item="Rain Design 10076 mStand360"
            itemLink="https://amzn.to/3xACAIi"
          />
          <SetupItem
            category="Green Screen"
            item="Elgato Green Screen - Collapsible"
            itemLink="https://amzn.to/3RVPNmX"
          />
        </table>
        <h2 className="blue-text">Softwares</h2>
        <table>
          <tr>
            <th>Content Creation</th>
          </tr>
          <SetupItem
            category="Code Editor"
            item="Visual Studio Code"
            itemLink="https://code.visualstudio.com/"
          />
          <SetupItem
            category="Illustrations"
            item="Procreate"
            itemLink="https://procreate.art/"
          />
          <SetupItem
            category="Vector Design"
            item="Affinity Designer"
            itemLink="https://affinity.serif.com/en-us/designer/"
          />
          <SetupItem
            category="Video Editing"
            item="Final Cut Pro"
            itemLink="https://www.apple.com/final-cut-pro/"
          />
        </table>
      </section>
    </main>
  );
}
