import { useState } from "react";

export default function App() {
  const [settings, setSettings] = useState({
    aimbot: true,
    sniperAimbot: true,
    fastSniperSwitch: true,
    noRecoil: true,
  });

  const toggle = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const resetSettings = () => {
    setSettings({
      aimbot: false,
      sniperAimbot: false,
      fastSniperSwitch: false,
      noRecoil: false,
    });
  };

  const applySettings = () => {
    alert("Configuration applied");
  };

  return (
    <main className="page-shell">
      <div className="panel">
        <h1>Free Fire Utility Panel</h1>

        <div className="grid">
          <SettingRow
            label="Aimbot"
            enabled={settings.aimbot}
            onToggle={() => toggle("aimbot")}
          />
          <SettingRow
            label="Sniper Aimbot"
            enabled={settings.sniperAimbot}
            onToggle={() => toggle("sniperAimbot")}
          />
          <SettingRow
            label="Fast Sniper Switch"
            enabled={settings.fastSniperSwitch}
            onToggle={() => toggle("fastSniperSwitch")}
          />
          <SettingRow
            label="No Recoil"
            enabled={settings.noRecoil}
            onToggle={() => toggle("noRecoil")}
          />
        </div>

        <div className="actions">
          <button className="btn primary" onClick={applySettings}>
            Apply
          </button>
          <button className="btn secondary" onClick={resetSettings}>
            Reset
          </button>
        </div>
      </div>
    </main>
  );
}

function SettingRow({ label, enabled, onToggle }) {
  return (
    <div className="setting">
      <label>{label}</label>
      <div className="toggle-wrap">
        <button
          type="button"
          className={`switch ${enabled ? "on" : ""}`}
          onClick={onToggle}
          aria-label={label}
        >
          <span className="switch-thumb" />
        </button>
        <span className="status">{enabled ? "Enabled" : "Disabled"}</span>
      </div>
    </div>
  );
}
