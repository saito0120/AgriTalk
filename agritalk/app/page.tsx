"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// AgriTalk ホームページ
// 農業 × 音声アシスタント × データ管理アプリの想定デザイン
// Tailwind + shadcn/ui ベース

export default function AgriTalkHomepage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white text-slate-900">
      {/* Header */}
      <header className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-green-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg">
            AT
          </div>
          <div>
            <h1 className="text-xl font-semibold">AgriTalk</h1>
            <p className="text-sm text-slate-500">農家のための対話型スマート農業プラットフォーム</p>
          </div>
        </div>
        <nav className="flex gap-3 items-center">
          <Button asChild>
            <a href="#features">機能</a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="#demo">デモ</a>
          </Button>
        </nav>
      </header>

      {/* Hero */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl font-extrabold leading-tight">
              農作業をもっと <span className="text-green-600">かんたんに、スマートに。</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              AgriTalk は農家が日々の作業を "話しかけるだけ" で記録・管理できるアプリです。
              作業メモ、天候情報、圃場データの管理を、負担なく効率化できます。
            </p>

            <div className="mt-6 flex gap-3">
              <Button size="lg" asChild>
                <a href="#start">今すぐ始める</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#features">機能を見る</a>
              </Button>
            </div>
          </motion.div>

          <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }}>
            <div className="bg-white shadow-xl rounded-3xl p-6">
              <h3 className="text-lg font-medium">AgriTalkでできること</h3>
              <ul className="mt-4 space-y-3 text-slate-600">
                <li>・音声で作業記録（種まき・収穫・散布など）</li>
                <li>・天候データと連携して最適な作業時期を提案</li>
                <li>・圃場ごとの作業状況が一目で可視化</li>
                <li>・チームで情報共有（家族・従業員）</li>
              </ul>
            </div>
          </motion.div>
        </section>

        {/* Features */}
        <section id="features" className="mt-20">
          <h3 className="text-2xl font-semibold">主な機能</h3>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <FeatureCard title="音声操作" desc="作業しながら声で記録。手が離せない状況でもログを残せます。" />
            <FeatureCard title="作業管理" desc="作業日、作業内容、使用資材を一覧で確認できます。" />
            <FeatureCard title="圃場データの可視化" desc="作物ごとの生育状況や履歴がひとめでわかるダッシュボード。" />
            <FeatureCard title="天候サポート" desc="天気・気温・湿度情報と連動し、作業タイミングを提案。" />
            <FeatureCard title="チーム共有" desc="家族経営や複数人の農場でもシェアが簡単。" />
            <FeatureCard title="クラウドバックアップ" desc="データはクラウドに安全保存。端末が変わっても問題なし。" />
          </div>
        </section>

        {/* Demo */}
        <section id="demo" className="mt-20">
          <h3 className="text-2xl font-semibold">デモを見る</h3>
          <p className="mt-3 text-slate-600">AgriTalkの操作感を動画やサンプル画面で体験できます。</p>

          <div className="mt-6 flex gap-3">
            <Button asChild>
              <a href="/demo">デモを見る</a>
            </Button>
            <Button variant="ghost" asChild>
              <a href="/signup">無料で始める</a>
            </Button>
          </div>
        </section>

        {/* Team */}
        <section id="team" className="mt-20">
          <h3 className="text-2xl font-semibold">チーム構成</h3>
          <p className="mt-3 text-slate-600">5人想定：企画、UI/UX、フロント、バックエンド、データ解析に分割可能。</p>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t mt-20 py-6 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-sm text-slate-500 flex justify-between items-center">
          <div>© {new Date().getFullYear()} AgriTalk — スマート農業プラットフォーム</div>
          <div className="flex gap-4">
            <a href="#privacy" className="underline">プライバシー</a>
            <a href="#terms" className="underline">利用規約</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ title, desc }) {
  return (
    <Card>
      <CardContent>
        <h4 className="font-semibold">{title}</h4>
        <p className="mt-2 text-sm text-slate-600">{desc}</p>
      </CardContent>
    </Card>
  );
}

