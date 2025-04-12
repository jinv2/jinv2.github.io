"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckIcon, PlusIcon, Globe, Mail, Beaker, ChevronRight, Newspaper, Code } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AILabProfileCard() {
  const [isFollowing, setIsFollowing] = useState(false)

  const toggleFollow = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <Card className="overflow-hidden border shadow-lg">
        {/* 顶部背景区域 */}
        <div className="relative h-28 bg-gradient-to-r from-emerald-700 via-teal-600 to-emerald-600">
          <div className="absolute -bottom-12 left-6">
            <div className="relative w-24 h-24 overflow-hidden rounded-full border-4 border-white bg-white shadow-md">
              <Image src="/natural-algorithm-logo.png" alt="天算AI" fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* 用户信息区域 */}
        <CardHeader className="pt-16 pb-3 px-6">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-bold leading-tight">天算AI科技研发实验室</h2>
              <p className="text-sm text-muted-foreground">Natural Algorithm AI R&D Lab</p>
            </div>
            <Button
              onClick={toggleFollow}
              size="sm"
              className={
                isFollowing
                  ? "bg-white text-emerald-600 hover:bg-gray-100 border border-emerald-600"
                  : "bg-emerald-600 hover:bg-emerald-700"
              }
            >
              {isFollowing ? (
                <span className="flex items-center">
                  <CheckIcon className="w-4 h-4 mr-1" />
                  已关注
                </span>
              ) : (
                <span className="flex items-center">
                  <PlusIcon className="w-4 h-4 mr-1" />
                  关注
                </span>
              )}
            </Button>
          </div>
        </CardHeader>

        {/* 简介区域 */}
        <CardContent className="px-6 py-0">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 border-0">
              <Code className="w-3 h-3 mr-1" />
              AI科技博主
            </Badge>
            <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 border-0">
              <Beaker className="w-3 h-3 mr-1" />
              AI科技研发
            </Badge>
            <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 border-0">
              <Newspaper className="w-3 h-3 mr-1" />
              科技前沿最新AI资讯影视化报道
            </Badge>
          </div>
        </CardContent>

        {/* 数字资产区域 */}
        <CardContent className="px-6 py-2">
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-sm font-medium text-gray-800 mb-3 flex items-center">
              <span className="w-1 h-4 bg-emerald-500 rounded mr-2"></span>
              天算AI数字资产
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <ChevronRight className="w-4 h-4 text-emerald-500 mr-1 flex-shrink-0 mt-0.5" />
                <span>5万字原创诗文</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-4 h-4 text-emerald-500 mr-1 flex-shrink-0 mt-0.5" />
                <span>7千分钟原创交响乐</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-4 h-4 text-emerald-500 mr-1 flex-shrink-0 mt-0.5" />
                <span>9千部原创AI短视频</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-4 h-4 text-emerald-500 mr-1 flex-shrink-0 mt-0.5" />
                <span>16项原创AI科技产品</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-4 h-4 text-emerald-500 mr-1 flex-shrink-0 mt-0.5" />
                <span>7个天算AI大语言模型</span>
              </li>
            </ul>
          </div>
        </CardContent>

        {/* 联系方式区域 */}
        <CardFooter className="px-6 py-4 flex flex-col items-start border-t border-gray-100 mt-2">
          <h3 className="text-sm font-medium text-gray-800 mb-3 flex items-center">
            <span className="w-1 h-4 bg-emerald-500 rounded mr-2"></span>
            联系方式
          </h3>
          <div className="space-y-3 w-full">
            <Link
              href="https://jinvbar.github.io/tsai/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm text-emerald-600 hover:text-emerald-700 transition-colors group"
            >
              <div className="flex items-center bg-emerald-50 p-1.5 rounded mr-2 group-hover:bg-emerald-100 transition-colors">
                <Globe className="w-3.5 h-3.5 text-emerald-600" />
              </div>
              <span className="truncate">天算AI博客：https://jinvbar.github.io/tsai/</span>
            </Link>
            <div className="flex items-center text-sm text-gray-600">
              <div className="flex items-center bg-emerald-50 p-1.5 rounded mr-2">
                <Mail className="w-3.5 h-3.5 text-emerald-600" />
              </div>
              <span className="truncate">联系方式：ssk937520@gmail.com</span>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
