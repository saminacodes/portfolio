import { SetupItem } from "../components/common/SetupItem";

export default function SetupPage() {
  return (
    <main id="setup" className="setup">
      <section className="wrapper">
        <div></div>
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
            <th>Audio Input</th>
          </tr>

          <SetupItem category="Microphone" item="Shure SM7B" />
          <SetupItem category="Audio Interface" item="Focusrite Scarlett 2i2" />
          <SetupItem
            category="Mic Activator"
            item="Cloud Microphones Cloudlifter CL-1"
          />
          <SetupItem
            category="Mic Stand"
            item="Rode PSA1"
            itemLink="https://amzn.to/3REhNev"
          />
        </table>
        <table>
          <tr>
            <th>Audio Output</th>
          </tr>
          <SetupItem category="Speaker" item="Kanto YU2" />
          <SetupItem category="Headphones" item="Sennheiser HD579" />
        </table>

        <table>
          <tr>
            <th>Camera Setup</th>
          </tr>
          <SetupItem category="Camera" item="Sony a6000" />
          <SetupItem category="Cam Link" item="Elgato Cam Link 4K" />
          <SetupItem category="Lights" item="Elgato Cam Link 4K" />
        </table>

        <h2 className="green-text">Accessories</h2>
        <table>
          <tr>
            <th>Company</th>
          </tr>
          <SetupItem category="Camera" item="Sony a6000" />
          <SetupItem category="Cam Link" item="Elgato Cam Link 4K" />
        </table>
        <h2 className="blue-text">Miscellaneous</h2>
        <table>
          <tr>
            <th>Setup</th>
          </tr>
          <tr>
            <td>Desk</td>
            <td>Ergonofis The Shift / Deep Black / 30&#39; X 72&#39;</td>
            <td></td>
          </tr>
          <tr>
            <td>Chair</td>
            <td>Herman Miller Sayl</td>
            <td></td>
          </tr>
        </table>
      </section>
    </main>
  );
}
