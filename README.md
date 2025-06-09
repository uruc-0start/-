'''mermaid
gantt
  title 3-Year DX & Data Roadmap (2025-07 → 2028-06)
  dateFormat  YYYY-MM-DD
  axisFormat  %Y-%m

  %% ──────────────── Year 1 ─────────────────
  section Year 1  ▶▶ 基礎固め & 小さな実践
  IT Passport (★試験)         :active,  itp,       2025-07-01, 2025-10-01
  Stats Grade-2 イントロ       :           stat0,    2025-09-01, 30d
  Stats Grade-2 本格　　　     :           stat1,    2025-10-01, 2026-02-01
  Python DA Cert 学習          :           pydac,    2025-11-01, 2026-03-01
  G Test (JDLA)               :           gtest,    2026-01-01, 2026-03-31
  Kaggle Intro (入門課題)      :           kaggle,   2026-04-01, 2026-06-15
  AWS SAA 基礎スタート         :           aws0,     2026-05-15, 2026-06-30

  %% ──────────────── Year 2 ─────────────────
  section Year 2  ▶▶ 実務リンク & 専門深化
  FE (基本情報) 学習＋受験     :active,  fe,        2026-07-01, 2027-04-15
  DX 業務ヒアリング              :           dxhear,  2026-08-01, 45d
  AWS SAA 仕上げ＋受験         :           aws1,     2026-10-01, 2026-12-15
  Dashboard PoC 制作          :           poc,      2026-11-01, 45d
  SG (セキュリティ) 学習       :           sg,       2027-01-01, 2027-04-15
  DX 勉強会 開催              :milestone,study,     2027-03-15, 0d
  AP (応用情報) イントロ        :           ap0,      2027-04-01, 2027-06-30

  %% ──────────────── Year 3 ─────────────────
  section Year 3  ▶▶ 実績づくり & 外部発信
  AP (応用情報) 本格＋受験     :active,  ap1,       2027-07-01, 2027-10-15
  DX プロジェクト KPI計測     :           kpi,      2027-07-01, 2028-03-31
  事例発表 (自治体 CIO FES)   :milestone,case,     2027-11-01, 0d
  Security Specialist 挑戦†   :           secsp,    2027-11-01, 2028-04-15
  Portfolio 最終仕上げ        :           port,     2028-01-01, 2028-03-15
  PMI-ACP (プロマネ外部)       :           pmi,      2028-02-01, 2028-04-15
  キャリア決定 (内定／辞令)   :milestone,career,   2028-06-01, 0d

  %% ──────────────── Continuous lane ───────
  section Continuous
  GitHub 学習ログ (週8h内で継続) :crit,    ghlog,    2025-07-01, 2028-06-30
